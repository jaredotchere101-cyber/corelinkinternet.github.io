const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const session = require('express-session');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'orders.db');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'corelink-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2 * 60 * 60 * 1000,
  },
}));
app.use(express.static(path.join(__dirname)));

function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}

const db = new sqlite3.Database(DB_PATH, err => {
  if (err) {
    console.error('Failed to open database', err);
    process.exit(1);
  }
});

// Configure Twilio client if credentials are provided
let twilioClient = null;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_FROM_NUMBER = process.env.TWILIO_FROM_NUMBER; // e.g. +12025551234
const ADMIN_SMS_NUMBER = process.env.ADMIN_SMS_NUMBER; // destination admin number
if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_FROM_NUMBER && ADMIN_SMS_NUMBER) {
  try {
    twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    console.log('Twilio client configured, SMS notifications enabled');
  } catch (err) {
    console.warn('Failed to configure Twilio client', err);
    twilioClient = null;
  }
} else {
  console.log('Twilio not configured - set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, and ADMIN_SMS_NUMBER to enable SMS');
}

const createTableSql = `
CREATE TABLE IF NOT EXISTS orders (
  orderId TEXT PRIMARY KEY,
  packageName TEXT,
  provider TEXT,
  amount INTEGER,
  beneficiaryNumber TEXT,
  contactNumber TEXT,
  status TEXT,
  createdAt TEXT
)`;

db.run(createTableSql, err => {
  if (err) console.error('Failed to create orders table', err);
});

app.get('/api/admin/orders', requireAdmin, (req, res) => {
  const sql = 'SELECT * FROM orders ORDER BY createdAt DESC';
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Could not fetch orders' });
    res.json(rows);
  });
});

app.get('/api/orders/:orderId', (req, res) => {
  const { orderId } = req.params;
  const sql = 'SELECT * FROM orders WHERE orderId = ?';
  db.get(sql, [orderId], (err, row) => {
    if (err) return res.status(500).json({ error: 'Could not fetch order' });
    if (!row) return res.status(404).json({ error: 'Order not found' });
    res.json(row);
  });
});

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.json({ success: true });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/api/admin/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ error: 'Could not log out' });
    res.json({ success: true });
  });
});

app.get('/api/admin/status', (req, res) => {
  if (req.session && req.session.isAdmin) {
    return res.json({ authenticated: true });
  }
  res.status(401).json({ authenticated: false });
});

app.post('/api/orders', (req, res) => {
  const {
    orderId,
    packageName,
    provider,
    amount,
    beneficiaryNumber,
    contactNumber,
    status,
    createdAt,
  } = req.body;

  const sql = `INSERT OR REPLACE INTO orders
    (orderId, packageName, provider, amount, beneficiaryNumber, contactNumber, status, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(sql, [orderId, packageName, provider, amount, beneficiaryNumber, contactNumber, status, createdAt], function(err) {
    if (err) return res.status(500).json({ error: 'Could not save order' });
    res.json({ success: true, orderId });

    // Send SMS notification to admin (non-blocking)
    if (twilioClient && ADMIN_SMS_NUMBER) {
      const body = `New order ${orderId}: ${packageName} - ₦${amount}. Beneficiary: ${beneficiaryNumber || 'N/A'}. Contact: ${contactNumber || 'N/A'}`;
      twilioClient.messages.create({ body, from: TWILIO_FROM_NUMBER, to: ADMIN_SMS_NUMBER })
        .then(message => console.log('SMS sent, sid=', message.sid))
        .catch(err => console.warn('Failed to send SMS notification', err));
    }
  });
});

app.put('/api/admin/orders/:orderId/status', requireAdmin, (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  const sql = 'UPDATE orders SET status = ? WHERE orderId = ?';

  db.run(sql, [status, orderId], function(err) {
    if (err) return res.status(500).json({ error: 'Could not update order status' });
    if (this.changes === 0) return res.status(404).json({ error: 'Order not found' });
    res.json({ success: true, orderId, status });
  });
});

app.listen(PORT, () => {
  console.log(`CoreLink server running at http://localhost:${PORT}`);
});
