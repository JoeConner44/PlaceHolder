// app.js — PLACEHOLDER DMS core application logic

// ── Navigation ──────────────────────────────────────────────
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');

  const navItem = document.querySelector(`[data-page="${pageId}"]`);
  if (navItem) navItem.classList.add('active');

  const titles = {
    dashboard: 'Dashboard', inventory: 'Inventory', deals: 'Deal desk',
    crm: 'CRM / Leads', fi: 'F&I', bhph: 'BHPH collections',
    etr: 'Georgia ETR', reports: 'Reports', ai: 'AI assistant', settings: 'Settings'
  };
  document.getElementById('topbar-title').textContent = titles[pageId] || pageId;
  AppState.currentPage = pageId;
  window.scrollTo(0, 0);
}

// ── Deal Calculator ──────────────────────────────────────────
function calcDeal() {
  const get = id => parseFloat(document.getElementById(id)?.value) || 0;
  const price    = get('d-price');
  const trade    = get('d-trade');
  const down     = get('d-down');
  const apr      = get('d-apr');
  const gap      = get('d-gap');
  const warranty = get('d-warranty');
  const term     = parseInt(document.getElementById('d-term')?.value) || 48;
  const cost     = get('d-cost');
  const dealType = document.getElementById('d-type')?.value || 'finance';

  const taxBase = Math.max(0, price - trade);
  const tax = Math.round(taxBase * 0.07);
  const el = document.getElementById('d-tax');
  if (el) el.value = tax;

  const financed = price - trade - down + tax + gap + warranty;
  const r = apr / 100 / 12;
  let payment = 0;
  if (dealType === 'cash') {
    payment = 0;
  } else if (r > 0) {
    payment = Math.round(financed * r / (1 - Math.pow(1 + r, -term)));
  } else {
    payment = term > 0 ? Math.round(financed / term) : 0;
  }

  const frontGross = price - trade - cost;
  const backGross  = Math.max(0, (gap > 0 ? gap - 195 : 0) + (warranty > 0 ? warranty - 600 : 0));
  const totalGross = frontGross + backGross;

  const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
  set('s-price',    '$' + price.toLocaleString());
  set('s-trade',    trade > 0 ? '-$' + trade.toLocaleString() : '$0');
  set('s-down',     down > 0  ? '-$' + down.toLocaleString()  : '$0');
  set('s-tax',      '+$' + tax.toLocaleString());
  set('s-gap',      gap > 0      ? '+$' + gap.toLocaleString()      : '$0');
  set('s-warranty', warranty > 0 ? '+$' + warranty.toLocaleString() : '$0');
  set('s-financed', '$' + Math.round(financed).toLocaleString());
  set('s-payment',  dealType === 'cash' ? 'Cash deal' : '$' + payment.toLocaleString() + '/mo');
  set('s-front',    '$' + Math.round(frontGross).toLocaleString());
  set('s-back',     '$' + Math.round(backGross).toLocaleString());
  set('s-total',    '$' + Math.round(totalGross).toLocaleString());

  const totalEl = document.getElementById('s-total');
  if (totalEl) {
    totalEl.className = totalGross >= 0 ? 'text-success fw-600' : 'text-danger fw-600';
  }
}

function setDealType(type) {
  document.getElementById('d-type').value = type;
  document.querySelectorAll('.deal-type-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.type === type);
  });
  const financeFields = document.getElementById('finance-fields');
  if (financeFields) {
    financeFields.style.display = (type === 'cash') ? 'none' : 'grid';
  }
  calcDeal();
}

// ── Inventory Filters ────────────────────────────────────────
function filterInventory(status) {
  document.querySelectorAll('.inv-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.status === status);
  });
  const rows = document.querySelectorAll('.inv-row');
  rows.forEach(row => {
    if (status === 'all') {
      row.style.display = '';
    } else {
      row.style.display = row.dataset.status === status ? '' : 'none';
    }
  });
  updateInvCount(status);
}

function updateInvCount(status) {
  const visible = document.querySelectorAll(
    status === 'all' ? '.inv-row' : `.inv-row[data-status="${status}"]`
  );
  const el = document.getElementById('inv-count');
  if (el) el.textContent = visible.length + ' vehicles';
}

function searchInventory(q) {
  const query = q.toLowerCase();
  document.querySelectorAll('.inv-row').forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

// ── AI Chat ──────────────────────────────────────────────────
const aiConversation = [];

function getLocalAIResponse(msg) {
  const m = msg.toLowerCase();
  if (m.includes('aged') || m.includes('old') || m.includes('60 day') || m.includes('lot too long')) return AIResponses.aged;
  if (m.includes('structure') || m.includes('25,000') || m.includes('calculate') || m.includes('payment') || m.includes('deal for')) return AIResponses.deal;
  if (m.includes('follow') || m.includes('contact') || m.includes('reach out')) return AIResponses.leads;
  if (m.includes('best') || m.includes('highest gross') || m.includes('top deal')) return AIResponses.best;
  if (m.includes('bhph') || m.includes('overdue') || m.includes('late') || m.includes('collections')) return AIResponses.bhph;
  if (m.includes('conversion') || m.includes('close rate') || m.includes('how many leads')) return AIResponses.conversion;
  if (m.includes('pric') || m.includes('market') || m.includes('overpriced') || m.includes('underpriced')) return AIResponses.pricing;
  return null;
}

function aiAddMessage(text, role) {
  const container = document.getElementById('ai-messages');
  if (!container) return;
  const div = document.createElement('div');
  div.className = `ai-msg ${role}`;
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function aiShowThinking() {
  const container = document.getElementById('ai-messages');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'ai-thinking';
  div.id = 'ai-thinking';
  div.innerHTML = '<div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div><span>Thinking...</span>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function aiRemoveThinking() {
  const el = document.getElementById('ai-thinking');
  if (el) el.remove();
}

async function aiSend() {
  const input = document.getElementById('ai-input');
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';

  aiAddMessage(msg, 'user');
  aiConversation.push({ role: 'user', content: msg });

  const local = getLocalAIResponse(msg);
  if (local) {
    setTimeout(() => {
      aiAddMessage(local, 'assistant');
      aiConversation.push({ role: 'assistant', content: local });
    }, 600);
    return;
  }

  aiShowThinking();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are an AI assistant built into PLACEHOLDER DMS, a dealer management system for independent Georgia auto dealers.

Dealership: GA Auto Dealers LLC, Monroe, GA (Walton County)
Current stats: 47 units in inventory, 23 deals this month, $61,400 gross profit MTD, 34 open leads, 38 active BHPH accounts (6 overdue).
Top salespeople: Kevin S. (8 units), Brenda T. (7 units), Mike D. (5 units), Lisa R. (3 units).

Answer dealer questions concisely and practically. Use dollar amounts, percentages, and specific recommendations. Keep responses under 200 words. Format with line breaks for readability.`,
        messages: aiConversation.slice(-10)
      })
    });

    aiRemoveThinking();

    if (!response.ok) throw new Error('API error');
    const data = await response.json();
    const reply = data.content[0].text;
    aiAddMessage(reply, 'assistant');
    aiConversation.push({ role: 'assistant', content: reply });

  } catch (err) {
    aiRemoveThinking();
    const fallback = "I'm ready to help with your dealership questions. Try asking about aged inventory, deal structuring, lead follow-up, BHPH accounts, or pricing analysis.";
    aiAddMessage(fallback, 'assistant');
  }
}

function aiQuickPrompt(text) {
  navigate('ai');
  const input = document.getElementById('ai-input');
  if (input) {
    input.value = text;
    aiSend();
  }
}

// ── CRM Stage Filter ─────────────────────────────────────────
function filterLeads(stage) {
  document.querySelectorAll('.crm-stage-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.stage === stage);
  });
  document.querySelectorAll('.pipeline-card').forEach(card => {
    if (stage === 'all') {
      card.style.display = '';
    } else {
      card.style.display = card.dataset.stage === stage ? '' : 'none';
    }
  });
}

// ── ETR Status Filter ────────────────────────────────────────
function filterETR(status) {
  document.querySelectorAll('.etr-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.status === status);
  });
  document.querySelectorAll('.etr-row').forEach(row => {
    if (status === 'all') {
      row.style.display = '';
    } else {
      row.style.display = row.dataset.status === status ? '' : 'none';
    }
  });
}

// ── Report chart bars ─────────────────────────────────────────
function renderReportBars() {
  const maxGross = Math.max(...ReportData.monthly.map(m => m.gross));
  const container = document.getElementById('monthly-chart');
  if (!container) return;
  container.innerHTML = ReportData.monthly.map(m => {
    const h = Math.round((m.gross / maxGross) * 120);
    return `<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:1">
      <div style="font-size:11px;color:var(--gray-500)">\$${(m.gross/1000).toFixed(0)}k</div>
      <div style="width:100%;height:${h}px;background:var(--blue);border-radius:4px 4px 0 0;opacity:${m.month==='May'?1:0.55}"></div>
      <div style="font-size:11px;color:var(--gray-400)">${m.month}</div>
    </div>`;
  }).join('');
}

// ── Settings toggles ─────────────────────────────────────────
function initToggles() {
  document.querySelectorAll('.toggle-switch input').forEach(input => {
    input.addEventListener('change', () => {
      // In production, this would call the backend API
    });
  });
}

// ── Login ─────────────────────────────────────────────────────
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email')?.value;
  const pass  = document.getElementById('login-password')?.value;
  if (!email || !pass) return;
  // In production: POST /api/auth/login
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-shell').style.display = 'flex';
  navigate('dashboard');
}

function handleLogout() {
  document.getElementById('app-shell').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
}

// ── VIN Decode (mock) ─────────────────────────────────────────
function decodeVIN() {
  const vin = document.getElementById('new-vin')?.value?.trim();
  if (!vin || vin.length < 17) {
    alert('Please enter a valid 17-character VIN');
    return;
  }
  // In production: GET /api/vin/{vin} → calls Chrome Data or NHTSA API
  const mockVehicles = {
    '1': { year: 2021, make: 'Ford',      model: 'F-150 XLT',    trim: 'XLT 4WD', engine: '3.5L V6' },
    '2': { year: 2020, make: 'Chevrolet', model: 'Equinox',      trim: 'LT',      engine: '1.5L Turbo' },
    '4': { year: 2019, make: 'Toyota',    model: 'Camry',        trim: 'SE',      engine: '2.5L 4-cyl' },
    '5': { year: 2022, make: 'Hyundai',   model: 'Tucson',       trim: 'SEL',     engine: '2.5L 4-cyl' },
  };
  const first = vin[0];
  const vehicle = mockVehicles[first] || { year: 2020, make: 'Vehicle', model: 'Decoded', trim: 'Base', engine: '2.0L 4-cyl' };
  ['new-year','new-make','new-model','new-trim','new-engine'].forEach((id, i) => {
    const vals = [vehicle.year, vehicle.make, vehicle.model, vehicle.trim, vehicle.engine];
    const el = document.getElementById(id);
    if (el) el.value = vals[i];
  });
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && document.activeElement?.id === 'ai-input') {
      aiSend();
    }
  });

  initToggles();

  // Show login first
  document.getElementById('app-shell').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';

  // Report bars render when reports page becomes visible
  const observer = new MutationObserver(() => {
    if (document.getElementById('page-reports')?.classList.contains('active')) {
      renderReportBars();
    }
  });
  const reportsPage = document.getElementById('page-reports');
  if (reportsPage) observer.observe(reportsPage, { attributes: true });
});
