const packages = [
  {
    id: 'MTN-250',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Daily 250MB',
    price: 200,
    description: '250MB valid for 24 hours on MTN network',
    features: ['250MB data', '24-hour validity', 'Quick activation'],
  },
  {
    id: 'MTN-500',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Daily 500MB',
    price: 320,
    description: '500MB valid for 24 hours on MTN network',
    features: ['500MB data', '24-hour validity', 'Quick activation'],
  },
  {
    id: 'MTN-1GB',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Weekly 1GB',
    price: 700,
    description: '1GB valid for 7 days with social apps access',
    features: ['1GB data', '7-day validity', 'Social apps included'],
  },
  {
    id: 'MTN-2GB',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Weekly 2GB',
    price: 1150,
    description: '2GB valid for 7 days across apps and browsing',
    features: ['2GB data', '7-day validity', 'Flexible use'],
  },
  {
    id: 'MTN-4GB',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Weekly 4GB',
    price: 1950,
    description: '4GB valid for 7 days with fast speeds',
    features: ['4GB data', '7-day validity', 'Fast network'],
  },
  {
    id: 'MTN-5GB',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Monthly 5GB',
    price: 1800,
    description: '5GB valid for 30 days with strong network coverage',
    features: ['5GB data', '30-day validity', 'Strong coverage'],
  },
  {
    id: 'MTN-10GB',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Monthly 10GB',
    price: 3200,
    description: '10GB valid for 30 days for streaming and browsing',
    features: ['10GB data', '30-day validity', 'Streaming ready'],
  },
  {
    id: 'MTN-15GB',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Monthly 15GB',
    price: 4700,
    description: '15GB valid for 30 days with extra browsing allowance',
    features: ['15GB data', '30-day validity', 'Great coverage'],
  },
  {
    id: 'MTN-20GB',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Night 20GB',
    price: 2800,
    description: '20GB night data valid between 12am and 5am',
    features: ['20GB night data', 'Night use only', 'Best for downloads'],
  },
  {
    id: 'MTN-30GB',
    provider: 'MTN',
    providerClass: 'provider-mtn',
    name: 'MTN Monthly 30GB',
    price: 6200,
    description: '30GB valid for 30 days for heavy browsing and streaming',
    features: ['30GB data', '30-day validity', 'Premium use'],
  },
  {
    id: 'TEL-250',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Daily 250MB',
    price: 180,
    description: '250MB valid for 24 hours on Telecel network',
    features: ['250MB data', '24-hour validity', 'Quick access'],
  },
  {
    id: 'TEL-500',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Daily 500MB',
    price: 320,
    description: '500MB valid for 24 hours with social apps support',
    features: ['500MB data', '24-hour validity', 'Social ready'],
  },
  {
    id: 'TEL-1GB',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Weekly 1GB',
    price: 720,
    description: '1GB valid for 7 days for browsing and messaging',
    features: ['1GB data', '7-day validity', 'Social apps included'],
  },
  {
    id: 'TEL-2GB',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Weekly 2GB',
    price: 1150,
    description: '2GB valid for 7 days across apps and web browsing',
    features: ['2GB data', '7-day validity', 'Flexible use'],
  },
  {
    id: 'TEL-5GB',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Monthly 5GB',
    price: 1750,
    description: '5GB valid for 30 days for browsing and light streaming',
    features: ['5GB data', '30-day validity', 'Economical'],
  },
  {
    id: 'TEL-8GB',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Monthly 8GB',
    price: 2500,
    description: '8GB valid for 30 days for heavy browsing',
    features: ['8GB data', '30-day validity', 'Streaming ready'],
  },
  {
    id: 'TEL-12GB',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Monthly 12GB',
    price: 3800,
    description: '12GB valid for 30 days with extra allowance',
    features: ['12GB data', '30-day validity', 'Social and video'],
  },
  {
    id: 'TEL-15GB',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Monthly 15GB',
    price: 4800,
    description: '15GB valid for 30 days for streaming and browsing',
    features: ['15GB data', '30-day validity', 'Premium use'],
  },
  {
    id: 'TEL-20GB',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Night 20GB',
    price: 2700,
    description: '20GB night data valid between 12am and 5am',
    features: ['20GB night data', 'Night use only', 'Good for downloads'],
  },
  {
    id: 'TEL-30GB',
    provider: 'Telecel',
    providerClass: 'provider-telecel',
    name: 'Telecel Monthly 30GB',
    price: 6200,
    description: '30GB valid for 30 days for heavy streaming and browsing',
    features: ['30GB data', '30-day validity', 'Premium access'],
  },
  {
    id: 'AT-250',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Daily 250MB',
    price: 190,
    description: '250MB valid for 24 hours on AT network',
    features: ['250MB data', '24-hour validity', 'Quick access'],
  },
  {
    id: 'AT-500',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Daily 500MB',
    price: 330,
    description: '500MB valid for 24 hours with social apps support',
    features: ['500MB data', '24-hour validity', 'Social ready'],
  },
  {
    id: 'AT-1GB',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Weekly 1GB',
    price: 750,
    description: '1GB valid for 7 days with messaging and browsing',
    features: ['1GB data', '7-day validity', 'Social apps included'],
  },
  {
    id: 'AT-2GB',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Weekly 2GB',
    price: 840,
    description: '2GB valid for 7 days with fast internet access',
    features: ['2GB data', '7-day validity', 'Fast speeds'],
  },
  {
    id: 'AT-5GB',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Monthly 5GB',
    price: 1850,
    description: '5GB valid for 30 days for browsing and light streaming',
    features: ['5GB data', '30-day validity', 'Broad coverage'],
  },
  {
    id: 'AT-10GB',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Monthly 10GB',
    price: 3200,
    description: '10GB valid for 30 days for heavy browsing and streaming',
    features: ['10GB data', '30-day validity', 'Unlimited social'],
  },
  {
    id: 'AT-15GB',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Monthly 15GB',
    price: 4600,
    description: '15GB valid for 30 days for browsing and premium use',
    features: ['15GB data', '30-day validity', 'High-speed access'],
  },
  {
    id: 'AT-20GB',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Night 20GB',
    price: 2750,
    description: '20GB night data valid between 12am and 5am',
    features: ['20GB night data', 'Night use only', 'Great for downloads'],
  },
  {
    id: 'AT-30GB',
    provider: 'AT',
    providerClass: 'provider-at',
    name: 'AT Monthly 30GB',
    price: 6300,
    description: '30GB valid for 30 days for streaming and work',
    features: ['30GB data', '30-day validity', 'Premium use'],
  },
];

const packageList = document.getElementById('package-list');
const packageCountLabel = document.getElementById('package-count');
const providerButtons = document.querySelectorAll('.provider-button');
let activeProvider = 'MTN';

const API_BASE = '';
const PAYSTACK_PUBLIC_KEY = 'pk_test_d16966f441de107af2c895515e8a1d92a666103f';
const PAYSTACK_CURRENCY = 'GHS';
const STORAGE_KEY = 'transactions';

function formatAmount(value) {
  const symbol = PAYSTACK_CURRENCY === 'GHS' ? '₵' : PAYSTACK_CURRENCY === 'NGN' ? '₦' : PAYSTACK_CURRENCY;
  return `${symbol}${value.toLocaleString()}`;
}

async function isAdminAuthenticated() {
  try {
    const response = await fetch(`${API_BASE}/api/admin/status`, {
      credentials: 'include',
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function checkAdminAccess() {
  const onDashboard = window.location.pathname.includes('admin-dashboard');
  const onLoginPage = window.location.pathname.includes('admin-login');

  if (!onDashboard && !onLoginPage) return;

  const authenticated = await isAdminAuthenticated();
  if (onDashboard && !authenticated) {
    window.location.href = 'admin-login.html';
  }
  if (onLoginPage && authenticated) {
    window.location.href = 'admin-dashboard.html';
  }
}

function bindAdminLogin() {
  const form = document.getElementById('admin-login-form');
  const error = document.getElementById('login-error');
  if (!form) return;

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const password = document.getElementById('admin-password')?.value.trim();

    try {
      const response = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        window.location.href = 'admin-dashboard.html';
        return;
      }
    } catch (error) {
      console.error('Admin login failed', error);
    }

    if (error) {
      error.textContent = 'Invalid password. Please try again.';
      error.style.display = 'block';
    }
  });
}

function bindAdminLogout() {
  const logoutBtn = document.getElementById('logout-button');
  if (!logoutBtn) return;

  logoutBtn.addEventListener('click', async () => {
    try {
      await fetch(`${API_BASE}/api/admin/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.warn('Logout request failed', error);
    }
    window.location.href = 'admin-login.html';
  });
}

function localTransactions() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function saveLocalTransactions(transactions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

function saveLocalTransaction(transaction) {
  const transactions = localTransactions();
  transactions.push(transaction);
  saveLocalTransactions(transactions);
  return transaction;
}

async function backendSaveTransaction(transaction) {
  const response = await fetch(`${API_BASE}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  });
  if (!response.ok) throw new Error('Backend save failed');
  return response.json();
}

async function saveTransaction(transaction) {
  try {
    return await backendSaveTransaction(transaction);
  } catch (error) {
    console.warn('Backend save failed, using local storage fallback', error);
    return saveLocalTransaction(transaction);
  }
}

async function backendGetAllTransactions() {
  const response = await fetch(`${API_BASE}/api/admin/orders`, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to fetch backend orders');
  return response.json();
}

async function getAllTransactions() {
  try {
    return await backendGetAllTransactions();
  } catch (error) {
    return localTransactions();
  }
}

async function backendGetTransaction(orderId) {
  const response = await fetch(`${API_BASE}/api/orders/${encodeURIComponent(orderId)}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Failed to fetch backend order');
  return response.json();
}

async function getTransaction(orderId) {
  try {
    return await backendGetTransaction(orderId);
  } catch (error) {
    return localTransactions().find(tx => tx.orderId === orderId);
  }
}

async function backendUpdateTransactionStatus(orderId, newStatus) {
  const response = await fetch(`${API_BASE}/api/admin/orders/${encodeURIComponent(orderId)}/status`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: newStatus }),
  });
  if (!response.ok) throw new Error('Failed to update backend order status');
  return response.json();
}

async function updateTransactionStatus(orderId, newStatus) {
  try {
    await backendUpdateTransactionStatus(orderId, newStatus);
    return true;
  } catch (error) {
    const transactions = localTransactions();
    const tx = transactions.find(t => t.orderId === orderId);
    if (tx) {
      tx.status = newStatus;
      saveLocalTransactions(transactions);
      return true;
    }
    return false;
  }
}

async function renderOrdersTable(transactions) {
  if (!transactions) {
    transactions = await getAllTransactions();
  }

  const tbody = document.getElementById('orders-tbody');
  const noOrders = document.getElementById('no-orders');
  const orderCount = document.getElementById('order-count');
  
  if (!tbody) return;

  tbody.innerHTML = '';
  
  if (!transactions || transactions.length === 0) {
    if (noOrders) noOrders.style.display = 'block';
    if (orderCount) orderCount.textContent = 'Total orders: 0';
    return;
  }

  if (noOrders) noOrders.style.display = 'none';
  if (orderCount) orderCount.textContent = `Total orders: ${transactions.length}`;

  transactions.forEach(tx => {
    const row = document.createElement('tr');
    const statusClass = tx.status === 'Delivered' ? 'status-delivered' : 
                       tx.status === 'Processing' ? 'status-processing' : 
                       tx.status === 'Paid' ? 'status-paid' : 'status-cancelled';
    
    row.innerHTML = `
      <td>${tx.orderId}</td>
      <td>${tx.packageName}</td>
      <td>${tx.provider || 'N/A'}</td>
      <td>${formatAmount(tx.amount)}</td>
      <td>${tx.beneficiaryNumber || 'N/A'}</td>
      <td>${tx.contactNumber || 'N/A'}</td>
      <td><span class="status-badge ${statusClass}">${tx.status}</span></td>
      <td>${new Date(tx.createdAt).toLocaleDateString()}</td>
      <td>
        <select class="status-select" data-order-id="${tx.orderId}">
          <option value="${tx.status}" selected>${tx.status}</option>
          <option value="Processing">Processing</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </td>
    `;
    tbody.appendChild(row);
  });

  bindStatusChangeHandlers();
}

function bindStatusChangeHandlers() {
  const selects = document.querySelectorAll('.status-select');
  selects.forEach(select => {
    select.addEventListener('change', async event => {
      const orderId = event.target.dataset.orderId;
      const newStatus = event.target.value;
      
      if (await updateTransactionStatus(orderId, newStatus)) {
        await renderOrdersTable();
      }
    });
  });
}

function bindDashboardFilters() {
  const searchInput = document.getElementById('filter-search');
  const statusSelect = document.getElementById('filter-status');
  
  if (!searchInput || !statusSelect) return;

  const applyFilters = async () => {
    const searchTerm = searchInput.value.toLowerCase();
    const statusFilter = statusSelect.value;
    const allTransactions = await getAllTransactions();

    const filtered = allTransactions.filter(tx => {
      const matchesSearch = !searchTerm || 
        tx.orderId.toLowerCase().includes(searchTerm) ||
        (tx.beneficiaryNumber && tx.beneficiaryNumber.includes(searchTerm));
      const matchesStatus = !statusFilter || tx.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    await renderOrdersTable(filtered);
  };

  searchInput.addEventListener('input', applyFilters);
  statusSelect.addEventListener('change', applyFilters);
}

async function initAdminDashboard() {
  await checkAdminAccess();
  bindAdminLogin();
  bindAdminLogout();
  
  if (window.location.pathname.includes('admin-dashboard')) {
    renderOrdersTable();
    bindDashboardFilters();
  }
}

function createPackageCard(pkg) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="package-header">
      <span class="provider-badge ${pkg.providerClass}">${pkg.provider}</span>
      <h2 class="package-title">${pkg.name}</h2>
    </div>
    <p class="package-description">${pkg.description}</p>
    <div class="package-price">${formatAmount(pkg.price)}</div>
    <ul class="features">
      ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    <button data-id="${pkg.id}">Buy Now</button>
    <p class="payment-note">Use mobile money to complete payment. Order ID will appear after payment. Track status on the "Track Order" page.</p>
  `;
  return card;
}

function renderPackages(provider = activeProvider) {
  if (!packageList) return;
  const filtered = packages.filter(pkg => pkg.provider === provider);
  packageList.innerHTML = '';
  filtered.forEach(pkg => packageList.appendChild(createPackageCard(pkg)));
  if (packageCountLabel) {
    packageCountLabel.textContent = `Showing ${filtered.length} packages for ${provider}.`;
  }
}

function setActiveProvider(provider) {
  activeProvider = provider;
  providerButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.provider === provider);
  });
  renderPackages(provider);
}

function setupProviderButtons() {
  providerButtons.forEach(button => {
    button.addEventListener('click', () => {
      const provider = button.dataset.provider;
      if (provider) setActiveProvider(provider);
    });
  });
}

function generateOrderId(packageId) {
  const randomPart = Math.floor(Math.random() * 9000) + 1000;
  return `${packageId}-${randomPart}`;
}

function getPackageById(id) {
  return packages.find(pkg => pkg.id === id);
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function populateCheckoutPage() {
  const packageId = getQueryParam('packageId');
  const pkg = getPackageById(packageId);
  const summary = document.getElementById('checkout-package-summary');
  const title = document.getElementById('checkout-title');
  const error = document.getElementById('checkout-error');

  if (!summary || !title) return;
  if (!pkg) {
    title.textContent = 'Package Not Found';
    summary.innerHTML = '<p>Please choose a valid package from the Packages page.</p>';
    if (error) error.textContent = 'No package selected. Please return to the Packages page.';
    return;
  }

  title.textContent = `Checkout: ${pkg.name}`;
  summary.innerHTML = `
    <div class="package-header">
      <span class="provider-badge ${pkg.providerClass}">${pkg.provider}</span>
      <strong>${pkg.name}</strong>
    </div>
    <p>${pkg.description}</p>
    <div class="package-price">${formatAmount(pkg.price)}</div>
  `;
}

function bindCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();
    const packageId = getQueryParam('packageId');
    const pkg = getPackageById(packageId);
    const beneficiary = document.getElementById('beneficiary-number')?.value.trim();
    const contact = document.getElementById('contact-number')?.value.trim();
    const email = document.getElementById('customer-email')?.value.trim();

    if (!pkg) {
      alert('No package selected. Please choose a package first.');
      return;
    }

    const validBeneficiary = beneficiary && /^[0-9]{8,15}$/.test(beneficiary.replace(/\D/g, ''));
    const validContact = contact && /^[0-9]{8,15}$/.test(contact.replace(/\D/g, ''));
    const validEmail = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!validBeneficiary) {
      alert('Please enter a valid beneficiary number.');
      return;
    }
    if (!validContact) {
      alert('Please enter a valid contact number.');
      return;
    }
    if (!validEmail) {
      alert('Please enter a valid email address.');
      return;
    }

    if (typeof PaystackPop === 'undefined') {
      alert('Paystack script is not loaded. Please open this page from a web server or check your connection.');
      return;
    }

    handlePaystackPayment(pkg, contact, beneficiary, email);
  });
}

function handlePaystackPayment(pkg, phone, beneficiaryNumber, email) {
  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: pkg.price * 100,
    currency: PAYSTACK_CURRENCY,
    // Allow card and mobile money so test transactions work if mobile money is not enabled in this Paystack account.
    channels: ['card', 'mobile_money'],
    ref: generateOrderId(pkg.id),
    metadata: {
      custom_fields: [
        { display_name: 'Package', variable_name: 'data_package', value: pkg.name },
        { display_name: 'Beneficiary Number', variable_name: 'beneficiary_number', value: beneficiaryNumber },
        { display_name: 'Contact Number', variable_name: 'customer_contact', value: phone },
      ],
    },
    callback: function(response) {
      const orderId = response.reference;
      const transaction = {
        orderId,
        packageName: pkg.name,
        provider: pkg.provider,
        amount: pkg.price,
        beneficiaryNumber,
        contactNumber: phone,
        status: 'Paid',
        createdAt: new Date().toISOString(),
      };
      saveTransaction(transaction)
        .then(() => {
          alert(`Payment complete! Your order ID is ${orderId}. Use it to track status.`);
        })
        .catch(() => {
          alert(`Payment complete! Your order ID is ${orderId}. It was saved locally after backend failure.`);
        });
    },
    onClose: function() {
      alert('Payment window closed. Your order was not completed.');
    },
  });
  handler.openIframe();
}

function bindPackageButtons() {
  packageList?.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.matches('button[data-id]')) return;

    const packageId = target.dataset.id;
    const pkg = packages.find(item => item.id === packageId);
    if (!pkg) return;

    window.location.href = `checkout.html?packageId=${packageId}`;
  });
}

function bindStatusCheck() {
  const button = document.getElementById('check-status');
  const input = document.getElementById('track-id');
  const result = document.getElementById('status-result');

  button?.addEventListener('click', async () => {
    const orderId = input?.value.trim();
    if (!orderId) {
      result.textContent = 'Please enter an order ID.';
      return;
    }
    const transaction = await getTransaction(orderId);
    if (!transaction) {
      result.textContent = `No transaction found for ${orderId}. Check your order ID and try again.`;
      return;
    }

    result.innerHTML = `
      <strong>Order ID:</strong> ${transaction.orderId}<br />
      <strong>Package:</strong> ${transaction.packageName}<br />
      <strong>Provider:</strong> ${transaction.provider || 'N/A'}<br />
      <strong>Beneficiary:</strong> ${transaction.beneficiaryNumber || 'N/A'}<br />
      <strong>Customer Contact:</strong> ${transaction.contactNumber || transaction.mobileMoneyNumber || 'N/A'}<br />
      <strong>Amount:</strong> ${formatAmount(transaction.amount)}<br />
      <strong>Status:</strong> ${transaction.status}<br />
      <strong>Created:</strong> ${new Date(transaction.createdAt).toLocaleString()}
    `;
  });
}

function initPaystackScript() {
  const existing = document.querySelector('script[src*="paystack.co"]');
  if (existing) return;
  const script = document.createElement('script');
  script.src = 'https://js.paystack.co/v1/inline.js';
  script.async = true;
  document.body.appendChild(script);
}

function init() {
  renderPackages();
  setupProviderButtons();
  bindPackageButtons();
  bindCheckoutForm();
  populateCheckoutPage();
  bindStatusCheck();
  initPaystackScript();
  initAdminDashboard();
}

init();
