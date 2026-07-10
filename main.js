/* ===================================================
   EssentialMC — main.js
   =================================================== */

const VERSIONS = [
  // 1.21.11 — release (latest) — NO BETA
  { id:'1.21.11', gameVer:'1.21.11', fabricApi:'0.115.0+1.21.11', date:'Jun 25, 2025', dateClass:'recent', channel:'release', isLatest:true,
    changelog:['Updated to Fabric API 0.115.0+1.21.11','Voice chat: fixed rare audio dropout when 6+ players are nearby','Fixed avatar badge rendering in the chat component system','Party chat now persists across dimension changes','Performance: reduced server-side tick overhead by ~30%','Fixed /back not triggering after lava death','Fixed tab list formatting breaking with unicode player names'] },

  // 1.21.10 — release
  { id:'1.21.10', gameVer:'1.21.10', fabricApi:'0.114.0+1.21.10', date:'Jun 12, 2025', dateClass:'recent', channel:'release',
    changelog:['Voice chat: push-to-talk key rebinding in mod settings','Added /party voice — private voice channel for party members','Fixed /back not saving location on fall damage death','Avatar title now renders correctly on Iris shader pipeline','Fixed /warp not sending feedback when destination is occupied','Fixed party invite message not appearing in chat on some clients','Improved /home tab-complete latency on large servers'] },
  // 1.21.10 — beta
  { id:'1.21.10', gameVer:'1.21.10', fabricApi:'0.114.0+1.21.10', date:'Jun 6, 2025', dateClass:'recent', channel:'beta',
    changelog:['Beta: push-to-talk rebinding prototype','Beta: /party voice initial implementation','Known issue: /back location may not save on fall damage','Avatar title rendering untested on Iris pipeline'] },

  // 1.21.9 — release
  { id:'1.21.9', gameVer:'1.21.9', fabricApi:'0.113.1+1.21.9', date:'Jun 3, 2025', dateClass:'recent', channel:'release',
    changelog:['Voice chat range configurable per-server via EssentialMC.json','Added mute-all keybind (default: M)','Bug fix: /tpa accepting requests after sender logged off','Bug fix: warp list showing duplicate entries after reload','Bug fix: /spawn setting wrong coordinates after world border resize','Bug fix: voice chat not reconnecting after server plugin reload','Bug fix: /party chat messages leaking to global chat'] },

  // 1.21.8 — release
  { id:'1.21.8', gameVer:'1.21.8', fabricApi:'0.112.0+1.21.8', date:'May 20, 2025', dateClass:'moderate', channel:'release',
    changelog:['Added in-game voice volume slider per player','/home now supports up to 5 named homes per player','Bug fix: scoreboard identity panel overlapping vanilla scoreboard','Bug fix: voice audio desync on servers with >50 players','Bug fix: /badge display breaking on server restart mid-session','Bug fix: /title command not persisting after world reload','Bug fix: party disband not clearing voice channel correctly'] },
  // 1.21.8 — beta
  { id:'1.21.8', gameVer:'1.21.8', fabricApi:'0.112.0+1.21.8', date:'May 13, 2025', dateClass:'moderate', channel:'beta',
    changelog:['Beta: voice volume slider per player','Beta: 5-home support implementation','Known issue: scoreboard panel overlap not yet resolved','Known issue: /title persistence under investigation'] },

  // 1.21.7 — release
  { id:'1.21.7', gameVer:'1.21.7', fabricApi:'0.111.0+1.21.7', date:'May 5, 2025', dateClass:'moderate', channel:'release',
    changelog:['Initial 1.21.7 compatibility update','Bug fix: voice chat desync on high-latency connections (>150ms)','Bug fix: /spawn not respecting world border boundaries','Bug fix: avatar badges disappearing after chunk reload','Bug fix: /tpa cooldown counter resetting incorrectly','Bug fix: /home delete command removing wrong home','Bug fix: party member list not updating after disconnect'] },

  // 1.21.6 — release
  { id:'1.21.6', gameVer:'1.21.6', fabricApi:'0.110.5+1.21.6', date:'Apr 14, 2025', dateClass:'moderate', channel:'release',
    changelog:['Added proximity voice chat — players within 24 blocks hear each other','Mic icon appears above player head while speaking','Bug fix: /tpa cooldown not resetting after server restart','/party kick and /party disband commands added','Added /party list command','Bug fix: proximity voice playing across different dimensions','Bug fix: /party disband leaving ghost entries in memory'] },
  // 1.21.6 — beta
  { id:'1.21.6', gameVer:'1.21.6', fabricApi:'0.110.5+1.21.6', date:'Apr 7, 2025', dateClass:'moderate', channel:'beta',
    changelog:['Beta: proximity voice chat implementation','Beta: mic indicator above player heads','Known issue: voice may play for players in different dimensions','Known issue: party disband may leave ghost entries'] },

  // 1.21.5 — release
  { id:'1.21.5', gameVer:'1.21.5', fabricApi:'0.109.0+1.21.5', date:'Mar 14, 2025', dateClass:'moderate', channel:'release',
    changelog:['Updated to Minecraft 1.21.5 and Fabric API 0.109.0','Per-player color themes saved server-side','Bug fix: /badge not working in offline-mode servers','Bug fix: party voice not closing when party disbanded','Bug fix: /back not available after dying in the Nether','Bug fix: scoreboard panel rendering twice on some packs','Bug fix: /setwarp failing silently with spaces in name'] },

  // 1.21.4 — release
  { id:'1.21.4', gameVer:'1.21.4', fabricApi:'0.108.0+1.21.4', date:'Feb 18, 2025', dateClass:'old', channel:'release',
    changelog:['Updated to Minecraft 1.21.4','Added /back command — returns player to last location','Warp system overhauled with permission node support per-warp','Bug fix: avatar chat display showing wrong name on join','Bug fix: /spawn teleporting player into blocks','Bug fix: party invite expiring too early (10s → 60s)','Bug fix: voice chat echo on servers with low tick rate'] },
  // 1.21.4 — beta
  { id:'1.21.4', gameVer:'1.21.4', fabricApi:'0.108.0+1.21.4', date:'Feb 10, 2025', dateClass:'old', channel:'beta',
    changelog:['Beta: 1.21.4 initial compatibility','Beta: /back command prototype','Beta: warp permission node system','Known issue: avatar chat display may show wrong name on join'] },

  // 1.21.3 — release
  { id:'1.21.3', gameVer:'1.21.3', fabricApi:'0.107.5+1.21.3', date:'Feb 1, 2025', dateClass:'old', channel:'release',
    changelog:['Bug fix: chunk loading crash on 1.21.3 dedicated servers','Bug fix: /tpa request not expiring on timeout','Bug fix: voice chat not initializing if Fabric API loads after mod','Bug fix: /home data wiped on world rename','Bug fix: /warp list not paginating correctly','Bug fix: /party voice leaking audio to nearby non-members','Bug fix: mod version check spamming console on startup'] },

  // 1.21.2 — release
  { id:'1.21.2', gameVer:'1.21.2', fabricApi:'0.106.1+1.21.2', date:'Jan 10, 2025', dateClass:'old', channel:'release',
    changelog:['Added custom avatar system: /badge and /title commands','Party system: /party create, /party invite, /party accept','Bug fix: /tpa not sending deny message on timeout','Bug fix: scoreboard panel flickering on high-TPS servers','Bug fix: /home creation failing on first-time install','Bug fix: voice chat not initializing on some Paper servers','Bug fix: /warp permissions not respected for non-OP players'] },

  // 1.21.1 — release
  { id:'1.21.1', gameVer:'1.21.1', fabricApi:'0.105.0+1.21.1', date:'Dec 20, 2024', dateClass:'old', channel:'release',
    changelog:['Initial public release for Minecraft 1.21.1','Core commands: /tpa, /home, /sethome, /warp, /setwarp, /spawn, /setspawn','Player data saved per-world with automatic migration on update','Fully compatible with Fabric API 0.105.0','Basic party system: /party create, invite, accept, leave','Voice chat module — proximity, 16-block default range','Avatar badge system: /badge equip, /badge list'] }
];

// ── Pagination state ──────────────────────────────────
const CHANGELOG_PER_PAGE = 7;
let changelogPage = 1;

// ── Active filters ────────────────────────────────────
let activeGameVer = null;
let activeChannel = null;

function getSorted(vArr) {
  return [...vArr].sort((a, b) => {
    if (a.isLatest) return -1;
    if (b.isLatest) return 1;
    return new Date(b.date) - new Date(a.date);
  });
}

function getFiltered() {
  return VERSIONS.filter(v => {
    if (activeGameVer && v.gameVer !== activeGameVer) return false;
    if (activeChannel && v.channel !== activeChannel) return false;
    return true;
  });
}

function getGameVers() {
  const seen = new Set();
  return VERSIONS.map(v => v.gameVer)
    .filter(gv => { if (seen.has(gv)) return false; seen.add(gv); return true; })
    .sort((a, b) => {
      const pa = a.split('.').map(Number), pb = b.split('.').map(Number);
      for (let i = 0; i < 3; i++) if ((pb[i]||0) !== (pa[i]||0)) return (pb[i]||0) - (pa[i]||0);
      return 0;
    });
}

const CHANNEL_META = {
  release: { icon:'R', bg:'var(--green-bg)', bd:'var(--green-bd)', color:'var(--green)' },
  beta:    { icon:'B', bg:'var(--brown-bg)', bd:'var(--brown-bd)', color:'var(--brown)' },
  alpha:   { icon:'A', bg:'rgba(167,139,250,0.08)', bd:'rgba(167,139,250,0.25)', color:'#a78bfa' }
};

function channelBadge(ch) {
  return `<span class="ch-dot-only ch-${ch}" title="${ch}"></span>`;
}
function vIcon(ch) {
  const m = CHANNEL_META[ch] || CHANNEL_META.release;
  return `<div class="v-icon v-icon-${ch}">${m.icon}</div>`;
}

// ── Render changelog with pagination ─────────────────
function renderChangelog() {
  const list = document.getElementById('changelogList');
  if (!list) return;
  const sorted = getSorted(getFiltered());
  if (!sorted.length) { list.innerHTML = '<p class="empty-msg">No versions match the current filters.</p>'; return; }

  const totalPages = Math.ceil(sorted.length / CHANGELOG_PER_PAGE);
  if (changelogPage > totalPages) changelogPage = 1;

  const pageItems = sorted.slice((changelogPage - 1) * CHANGELOG_PER_PAGE, changelogPage * CHANGELOG_PER_PAGE);

  const entriesHtml = pageItems.map((v, i) => {
    const isLast = i === pageItems.length - 1 && changelogPage === totalPages;
    const latestBadge = v.isLatest ? `<span class="badge-latest-row">latest</span>` : '';
    const items = v.changelog.map(c => `<li>${c}</li>`).join('');
    return `
    <div class="cl-entry${isLast ? ' last' : ''}">
      <div class="cl-line">
        <div class="cl-dot cl-dot-${v.channel}${v.isLatest ? ' cl-dot-latest' : ''}"></div>
      </div>
      <div class="cl-body">
        <div class="cl-header">
          <div class="cl-title">
            <span class="cl-name">[${v.gameVer}] Fabric API ${v.fabricApi}</span>
            ${channelBadge(v.channel)}
            <span class="cl-by">on ${v.date}</span>
            ${latestBadge}
          </div>
          <a href="versions/${v.id}.html" class="btn-dl-green" target="_blank">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download
          </a>
        </div>
        <ul class="cl-list">${items}</ul>
      </div>
    </div>`;
  }).join('');

  // pagination bar — TOP
  const pageButtons = Array.from({length: totalPages}, (_, i) => {
    const p = i + 1;
    return `<button class="cl-page-btn${p === changelogPage ? ' active' : ''}" data-page="${p}">${p}</button>`;
  }).join('');

  const paginationHtml = totalPages > 1 ? `
    <div class="cl-pagination cl-pagination-top">
      <span class="cl-page-info">Page ${changelogPage} of ${totalPages} · ${sorted.length} entries</span>
      <div class="cl-page-btns">
        <button class="cl-page-btn cl-prev" data-page="${changelogPage - 1}" ${changelogPage === 1 ? 'disabled' : ''}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        ${pageButtons}
        <button class="cl-page-btn cl-next" data-page="${changelogPage + 1}" ${changelogPage === totalPages ? 'disabled' : ''}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>` : '';

  list.innerHTML = `
    ${paginationHtml}
    <div class="cl-entries">${entriesHtml}</div>`;

  // pagination click handlers
  list.querySelectorAll('.cl-page-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = parseInt(btn.dataset.page);
      if (p < 1 || p > totalPages || btn.disabled) return;
      changelogPage = p;
      renderChangelog();
      list.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── Render versions ───────────────────────────────────
function renderVersions() {
  const list = document.getElementById('versionsList');
  if (!list) return;
  const sorted = getSorted(getFiltered());
  if (!sorted.length) { list.innerHTML = '<p class="empty-msg">No versions match the current filters.</p>'; return; }
  list.innerHTML = sorted.map(v => {
    const latestBadge = v.isLatest ? `<span class="badge-latest-row">latest</span>` : '';
    return `
    <div class="version-row${v.isLatest ? ' latest' : ''} ver-ch-${v.channel}">
      <div class="version-row-top">
        ${vIcon(v.channel)}
        <div>
          <div class="v-name">${v.id} ${latestBadge} ${channelBadge(v.channel)}</div>
          <div class="v-sub">EssentialMC ${v.id} · Fabric API ${v.fabricApi}</div>
        </div>
        <span class="v-game-tag">${v.gameVer}</span>
        <span class="v-platform">Fabric</span>
        <span class="v-date ${v.dateClass}">${v.date}</span>
        <a href="versions/${v.id}.html" class="btn-dl-green" target="_blank" onclick="event.stopPropagation()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download
        </a>
      </div>
    </div>`;
  }).join('');
}

function rerenderAll() {
  changelogPage = 1;
  renderChangelog();
  renderVersions();
}

// ── Dropdowns ─────────────────────────────────────────
function buildGameVerDropdown() {
  const btn = document.getElementById('btnGameVer');
  const dd  = document.getElementById('ddGameVer');
  if (!btn || !dd) return;

  // En üstten aşağıya: 1.21.11 → 1.21.1
  const allVers = ['1.21.11','1.21.10','1.21.9','1.21.8','1.21.7',
                   '1.21.6','1.21.5','1.21.4','1.21.3','1.21.2','1.21.1'];

  const verCount = {};
  VERSIONS.forEach(v => { verCount[v.gameVer] = (verCount[v.gameVer] || 0) + 1; });

  dd.innerHTML = `
    <div class="dd-item${activeGameVer === null ? ' active' : ''}" data-val="">
      <span class="dd-check">✓</span>
      <span class="dd-dot-empty"></span>
      <span>All versions</span>
      <span class="dd-count">${VERSIONS.length}</span>
    </div>
    <div class="dd-divider"></div>
    ${allVers.map(gv => `
    <div class="dd-item${activeGameVer === gv ? ' active' : ''}" data-val="${gv}">
      <span class="dd-check">✓</span>
      <span class="dd-dot-empty"></span>
      <span>${gv}</span>
      ${verCount[gv] ? `<span class="dd-count">${verCount[gv]}</span>` : ''}
    </div>`).join('')}`;

  dd.querySelectorAll('.dd-item').forEach(item => {
    item.addEventListener('click', () => {
      activeGameVer = item.dataset.val || null;
      btn.querySelector('.dd-label').textContent = activeGameVer || 'Game versions';
      closeAllDropdowns(); buildGameVerDropdown(); rerenderAll();
    });
  });
}

function buildChannelDropdown() {
  const btn = document.getElementById('btnChannels');
  const dd  = document.getElementById('ddChannels');
  if (!btn || !dd) return;
  const channels = [
    { val:'',        label:'All channels', dot:null },
    { val:'release', label:'Release',      dot:'var(--green)' },
    { val:'beta',    label:'Beta',         dot:'var(--brown)' }
  ];
  dd.innerHTML = channels.map(ch => `
    <div class="dd-item${activeChannel === (ch.val||null) ? ' active' : ''}" data-val="${ch.val}">
      <span class="dd-check">✓</span>
      ${ch.dot ? `<span class="dd-dot" style="background:${ch.dot}"></span>` : '<span class="dd-dot-empty"></span>'}
      ${ch.label}
    </div>`).join('');
  dd.querySelectorAll('.dd-item').forEach(item => {
    item.addEventListener('click', () => {
      activeChannel = item.dataset.val || null;
      const lbl = {release:'Release', beta:'Beta', '':'Channels'};
      btn.querySelector('.dd-label').textContent = activeChannel ? `Channel: ${lbl[activeChannel]}` : 'Channels';
      closeAllDropdowns(); buildChannelDropdown(); rerenderAll();
    });
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.dd-panel.open').forEach(d => d.classList.remove('open'));
  document.querySelectorAll('.filter-btn.dd-open').forEach(b => b.classList.remove('dd-open'));
}

function initDropdowns() {
  buildGameVerDropdown();
  buildChannelDropdown();
  ['btnGameVer','btnChannels'].forEach(id => {
    const btn = document.getElementById(id);
    const dd  = document.getElementById(id === 'btnGameVer' ? 'ddGameVer' : 'ddChannels');
    if (!btn || !dd) return;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = dd.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) { dd.classList.add('open'); btn.classList.add('dd-open'); }
    });
  });
  document.addEventListener('click', closeAllDropdowns);
}

// ── Content tabs ──────────────────────────────────────
function initContentTabs() {
  const tabs = document.querySelectorAll('.content-tab[data-panel]');
  const vfilters = document.getElementById('versionFilters');

  function activateTab(panelName) {
    tabs.forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const tab = [...tabs].find(t => t.dataset.panel === panelName);
    if (tab) tab.classList.add('active');
    document.getElementById('panel-' + panelName)?.classList.add('active');
    if (vfilters) vfilters.style.display = panelName === 'versions' ? 'flex' : 'none';
    localStorage.setItem('emc_active_tab', panelName);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab.dataset.panel));
  });

  // Sayfa yüklenince son aktif tab'ı geri yükle
  const saved = localStorage.getItem('emc_active_tab');
  if (saved && document.getElementById('panel-' + saved)) {
    activateTab(saved);
  } else {
    if (vfilters) vfilters.style.display = 'flex';
  }
}

// ── Auth modal ────────────────────────────────────────
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const modalTabs = document.querySelectorAll('.modal-tab');
  const authForms = document.querySelectorAll('.auth-form');
  const switchLinks = document.querySelectorAll('.switch-tab');
  function openModal(tab='login') { overlay.classList.add('open'); document.body.style.overflow='hidden'; activateTab(tab); }
  function closeModal() { overlay.classList.remove('open'); document.body.style.overflow=''; }
  function activateTab(name) {
    modalTabs.forEach(t => t.classList.toggle('active', t.dataset.modal === name));
    authForms.forEach(f => f.classList.toggle('active', f.id === name+'Form'));
  }
  document.getElementById('openLogin')?.addEventListener('click', () => openModal('login'));
  document.getElementById('openRegister')?.addEventListener('click', () => openModal('register'));
  document.getElementById('openLoginMobile')?.addEventListener('click', () => openModal('login'));
  document.getElementById('openRegisterMobile')?.addEventListener('click', () => openModal('register'));
  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  modalTabs.forEach(t => t.addEventListener('click', () => activateTab(t.dataset.modal)));
  switchLinks.forEach(l => l.addEventListener('click', e => { e.preventDefault(); activateTab(l.dataset.target); }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  document.querySelectorAll('.auth-form').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); closeModal(); }));
}

// ── Navbar / hamburger ────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) window.addEventListener('scroll', () => { navbar.style.borderBottomColor = window.scrollY > 10 ? 'var(--border-lt)' : 'var(--border)'; }, { passive:true });
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

// ── Init ──────────────────────────────────────────────
renderChangelog();
renderVersions();
initContentTabs();
initDropdowns();
initModal();
