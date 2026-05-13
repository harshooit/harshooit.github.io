// ===== GOTHAM OS — HARSHIT JADHAV PORTFOLIO =====
// Read-only portfolio. All data hardcoded below.

// ---- GOOGLE AI GENERATIVE CONFIG ----
// ---- HARDCODED PORTFOLIO DATA ----
const PORTFOLIO = {
  about: {
    name:       'Harshit Prabhakar Jadhav',
    birthDate:  '2007-09-08',   // YYYY-MM-DD — age computed live
    location:   'Pune, India',
    occupation: 'ECE 1st Year Student',
    college:    'Engineering (ECE)',
    interests:  'AI, Embedded Systems, Cloud, Crypto, Tech Innovation',
  },

  projects: [
    {
      id: 1,
      title: 'Hand Tracking System',
      emoji: '🖐️',
      desc: 'A real-time hand tracking system built using Google MediaPipe. Detects and tracks hand landmarks via webcam with high accuracy and low latency — bridging the gap between human gesture and machine input.',
      tags: 'MediaPipe, Python, Computer Vision, AI',
      url: 'https://harshitstrashideas.netlify.app/',
      images: [],
    },
    {
      id: 2,
      title: 'Clap Switch Circuit',
      emoji: '👏',
      desc: 'Designed and built an analog clap-activated switch circuit using resistors and capacitors. Captures sound vibrations and toggles an LED on/off — a hands-free, micro-controller-free smart switch.',
      tags: 'Electronics, Analog Circuits, Resistors, Capacitors',
      url: '',
      images: [],
    },
    {
      id: 3,
      title: 'Line Follower Robot',
      emoji: '🤖',
      desc: 'Engineered an autonomous line-following robot using Arduino UNO. The bot uses IR sensors to detect a black line and steers itself in real-time — fully autonomous navigation without any human input.',
      tags: 'Arduino UNO, Robotics, IR Sensors, Embedded Systems',
      url: '',
      images: [],
    },
    {
      id: 4,
      title: 'Azure Cloud Mining',
      emoji: '☁️',
      desc: 'Explored Microsoft Azure cloud infrastructure — provisioned virtual machines and leveraged cloud compute power for Bitcoin mining. Built hands-on knowledge of cloud architecture, VM management, and cryptocurrency fundamentals.',
      tags: 'Microsoft Azure, Cloud Computing, Bitcoin, Crypto',
      url: '',
      images: [],
    },
  ],

  hobbies: {
    games: [
      { name: 'The Walking Dead Series', emoji: '🧟', note: 'Clementine forever.',                           href: 'https://store.steampowered.com/app/207610/' },
      { name: 'Red Dead Redemption 2',   emoji: '🤠', note: 'Greatest open world ever made.',                href: 'https://store.steampowered.com/app/1174180/' },
      { name: 'Batman: Arkham Series',   emoji: '🦇', note: 'The Dark Knight rides again.',                  href: 'https://store.steampowered.com/app/200260/' },
      { name: "Assassin's Creed Series", emoji: '🗡️', note: 'Nothing is true, everything is permitted.',    href: 'https://store.steampowered.com/app/2641580/' },
    ],
    movies: [
      { name: 'Interstellar',   emoji: '🚀', note: 'Do not go gentle into that good night.', href: 'https://www.imdb.com/title/tt0816692/' },
      { name: 'Oppenheimer',    emoji: '☢️', note: 'Now I am become Death.',                 href: 'https://www.imdb.com/title/tt15398776/' },
      { name: 'Se7en',          emoji: '🔦', note: "What's in the box?!",                   href: 'https://www.imdb.com/title/tt0114369/' },
    ],
    series: [
      { name: 'Breaking Bad',       emoji: '🧪', note: 'I am the one who knocks.',     href: 'https://www.imdb.com/title/tt0903747/' },
      { name: 'Friends',            emoji: '☕', note: 'Could it BE any better?',      href: 'https://www.imdb.com/title/tt0108778/' },
      { name: 'Game of Thrones',    emoji: '👑', note: 'Winter is coming.',             href: 'https://www.imdb.com/title/tt0944947/' },
      { name: 'Brooklyn Nine-Nine', emoji: '🚔', note: 'Cool cool cool cool cool.',    href: 'https://www.imdb.com/title/tt2467372/' },
    ],
    music: [
      { name: 'TV Girl',           emoji: '📺', note: 'Who really cares?',              href: 'https://open.spotify.com/artist/4NZvixzsSefsNiIqXn0NDe' },
      { name: 'Arctic Monkeys',    emoji: '🐒', note: 'Do I wanna know?',               href: 'https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH' },
      { name: 'Chase Atlantic',    emoji: '🌊', note: 'Into it.',                        href: 'https://open.spotify.com/artist/7wbkd7VbDOlDpDUFORxitY' },
      { name: 'The Neighbourhood', emoji: '🖤', note: 'Sweater Weather hits different.', href: 'https://open.spotify.com/artist/77SW9BnxLY8rJ0RB2if4oH' },
    ],
  },

  contact: {
    email:     'hpjadhav3000@gmail.com',
    linkedin:  'https://www.linkedin.com/in/harshit-jadhav-429960357/',
    github:    'https://github.com/harshooit',
    instagram: 'https://www.instagram.com/harsho_oit/',
    discord:   'harsho_oit',
  },
};

// ---- BOOT SEQUENCE ----
window.addEventListener('DOMContentLoaded', () => {
  renderAboutDisplay();
  renderProjectsGrid();
  renderHobbiesGrid();
  renderContactDisplay();
  // Boot will now be started by the user clicking 'Power On'
  updateClock();
  setInterval(updateClock, 1000);
  document.addEventListener('click', closeSideEffects);
});

const BOOT_MSGS = [
  'HARSHIT PRABHAKAR JADHAV // GothamOS v1.0',
  'Loading ECE subsystems and circuit drivers...',
  'Initializing AI inference engine...',
  'Decrypting project archives...',
  'Calibrating bat-signal array...',
  'Bat system online. Game ready.',
  'System ready. Welcome, Detective.',
];

function runBoot() {
  const bar = document.getElementById('boot-bar');
  const msgs = document.getElementById('boot-messages');
  let pct = 0;
  let msgIdx = 0;

  function addMsg() {
    if (msgIdx < BOOT_MSGS.length) {
      const m = document.createElement('div');
      m.className = 'boot-msg';
      m.textContent = '> ' + BOOT_MSGS[msgIdx++];
      msgs.appendChild(m);
      msgs.scrollTop = msgs.scrollHeight;
    }
  }

  addMsg();
  const interval = setInterval(() => {
    pct += Math.random() * 15 + 6;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    bar.style.width = pct + '%';
    addMsg();
    if (pct === 100) setTimeout(showDesktop, 600);
  }, 280);
}

function showDesktop() {
  document.getElementById('boot-screen').style.display = 'none';
  const desktop = document.getElementById('desktop');
  desktop.style.display = 'block';
  initRain();
  initContextMenu();
  initEasterEgg();
  initDesktopInteractivity();
  initOsMenus();
  setTimeout(() => showToast('🦇 Welcome, Detective. Gotham awaits.', 3500), 600);

  // Start wallpaper video
  const video = document.getElementById('wallpaper-video');
  if (video) {
    video.play().catch(() => {
      console.log('Video autoplay blocked, will start on user interaction');
    });
  }

  // Music starts only after boot (desktop visible). Muted prime during Power On keeps playback allowed.
  ensureBackgroundAudio(true);
}

// ---- BACKGROUND MUSIC (user-gesture safe) ----
/** Called on Power On click: silent playback unlocks audio for later unmute after boot. */
function primeMusicDuringPowerOn() {
  const music = document.getElementById('bg-music');
  if (!music) return;
  music.volume = 0.07;
  music.muted = true;
  music.currentTime = 0;
  const p = music.play();
  if (p && typeof p.catch === 'function') p.catch(() => {});
}

function ensureBackgroundAudio(resetToStart) {
  const music = document.getElementById('bg-music');
  if (!music) return;
  if (resetToStart) music.currentTime = 0;
  music.muted = false;
  music.volume = 0.07;
  const p = music.play();
  if (p && typeof p.catch === 'function') {
    p.catch(() => attachMusicResumeFallback());
  }
  syncMusicDiscVisual();
}

let musicResumeAttached = false;
function attachMusicResumeFallback() {
  if (musicResumeAttached) return;
  musicResumeAttached = true;
  const opts = { capture: true, passive: true };
  const resume = () => {
    const m = document.getElementById('bg-music');
    if (!m || m.muted) return;
    const playP = m.play();
    if (playP && typeof playP.then === 'function') {
      playP
        .then(() => {
          document.removeEventListener('pointerdown', resume, opts);
          musicResumeAttached = false;
        })
        .catch(() => {});
    }
  };
  document.addEventListener('pointerdown', resume, opts);
}

function syncMusicDiscVisual() {
  const music = document.getElementById('bg-music');
  const disc = document.getElementById('music-disc');
  if (!music || !disc) return;
  if (music.muted) {
    disc.style.opacity = '0.4';
    disc.style.animationPlayState = 'paused';
  } else {
    disc.style.opacity = '1';
    disc.style.animationPlayState = 'running';
  }
}

// ---- TOGGLE MUSIC MUTE ----
function toggleMusicMute() {
  const music = document.getElementById('bg-music');
  const video = document.getElementById('wallpaper-video');
  if (music) {
    music.muted = !music.muted;
    if (video) video.muted = music.muted;
    if (music.muted) {
      showToast('🔇 Audio muted', 1500);
    } else {
      music.play().catch(() => {});
      if (video) video.play().catch(() => {});
      showToast('🔊 Audio unmuted', 1500);
    }
    syncMusicDiscVisual();
  }
}

// ---- CLOCK ----
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dateStr = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]}`;
  document.getElementById('taskbar-clock').innerHTML =
    `<div class="clock-time">${h}:${m}</div><div class="clock-date">${dateStr}</div>`;
}

// ---- AGE CALCULATOR ----
function calcAge(birthDateStr) {
  const birth = new Date(birthDateStr);
  const now   = new Date();
  let years  = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth()    - birth.getMonth();
  let days   = now.getDate()     - birth.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) { years--; months += 12; }
  return { years, months, days };
}

// ---- WINDOW MANAGEMENT ----
let zTop = 20;
const windowMeta = {};

function openWindow(name) {
  const id = `win-${name}`;
  const win = document.getElementById(id);
  if (!win) return;
  win.style.display = 'block';
  win.style.zIndex = ++zTop;
  windowMeta[id] = windowMeta[id] || {};
  windowMeta[id].minimized = false;
  addTaskbarBtn(id, name);
  closeStartMenu();
  setActiveWindow(id);
  win.classList.remove('window-pop');
  void win.offsetWidth;
  win.classList.add('window-pop');
  if (name === 'about') setTimeout(typeBio, 200);
  if (name === 'game') setTimeout(() => { initBatGame(); resetBatGame(); startBatGame(); }, 200);
}

function closeWindow(id) {
  const win = document.getElementById(id);
  if (win) win.style.display = 'none';
  if (id === 'win-game') stopBatGame();
  removeTaskbarBtn(id);
}

function minimizeWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;
  if (id === 'win-game') stopBatGame();
  win.style.display = 'none';
  windowMeta[id] = windowMeta[id] || {};
  windowMeta[id].minimized = true;
  updateTaskbarBtn(id, true);
}

function maximizeWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;
  if (win.classList.contains('maximized')) {
    win.classList.remove('maximized');
    const prev = windowMeta[id]?.maxPrev;
    if (prev) { win.style.top=prev.top; win.style.left=prev.left; win.style.width=prev.width; win.style.height=prev.height||''; }
  } else {
    windowMeta[id] = windowMeta[id] || {};
    windowMeta[id].maxPrev = { top:win.style.top, left:win.style.left, width:win.style.width, height:win.style.height };
    win.classList.add('maximized');
  }
}

function addTaskbarBtn(id, name) {
  if (document.getElementById('tbtn-' + id)) return;
  const labels = {
    'win-about':'🧬 About',
    'win-projects':'💻 Projects',
    'win-hobbies':'🎮 Hobbies',
    'win-contact':'📡 Contact',
    'win-game':'🕹️ Bat Game',
  };
  const btn = document.createElement('button');
  btn.className = 'taskbar-btn active';
  btn.id = 'tbtn-' + id;
  btn.textContent = labels[id] || name;
  btn.onclick = () => toggleWindowFromTaskbar(id);
  document.getElementById('taskbar-windows').appendChild(btn);
}

function removeTaskbarBtn(id) {
  const btn = document.getElementById('tbtn-' + id);
  if (btn) btn.remove();
}

function updateTaskbarBtn(id, minimized) {
  const btn = document.getElementById('tbtn-' + id);
  if (btn) btn.classList.toggle('active', !minimized);
}

function toggleWindowFromTaskbar(id) {
  const win = document.getElementById(id);
  if (!win) return;
  const meta = windowMeta[id] || {};
  if (win.style.display === 'none') {
    win.style.display = 'block';
    win.style.zIndex = ++zTop;
    meta.minimized = false;
    updateTaskbarBtn(id, false);
    setActiveWindow(id);
    win.classList.remove('window-task-pop');
    void win.offsetWidth;
    win.classList.add('window-task-pop');
  } else {
    minimizeWindow(id);
  }
}

// ---- DRAGGING ----
let dragData = null;
function startDrag(e, id) {
  if (e.target.tagName === 'BUTTON') return;
  const win = document.getElementById(id);
  if (!win) return;
  win.style.zIndex = ++zTop;
  const rect = win.getBoundingClientRect();
  dragData = { win, startX: e.clientX, startY: e.clientY, origLeft: rect.left, origTop: rect.top };
  win.classList.remove('maximized');
  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);
  e.preventDefault();
}
function doDrag(e) {
  if (!dragData) return;
  dragData.win.style.left = (dragData.origLeft + e.clientX - dragData.startX) + 'px';
  dragData.win.style.top  = (dragData.origTop  + e.clientY - dragData.startY) + 'px';
}
function stopDrag() {
  dragData = null;
  document.removeEventListener('mousemove', doDrag);
  document.removeEventListener('mouseup', stopDrag);
}

// ---- START MENU ----
function toggleStartMenu() {
  const m = document.getElementById('start-menu');
  m.style.display = m.style.display === 'block' ? 'none' : 'block';
}
function closeStartMenu() { document.getElementById('start-menu').style.display = 'none'; }
function closeSideEffects(e) {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn'))
    closeStartMenu();
}

// ---- SHUTDOWN ----
function shutdown() {
  closeStartMenu();
  document.getElementById('shutdown-dialog').style.display = 'flex';
}
function confirmShutdown() {
  document.getElementById('shutdown-dialog').style.display = 'none';
  document.getElementById('desktop').style.display = 'none';
  document.getElementById('poweroff-screen').style.display = 'flex';
}
// ---- FULLSCREEN (must run inside a user gesture — Power On qualifies) ----
function requestAppFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement) return;
  const root = document.documentElement;
  const req =
    root.requestFullscreen ||
    root.webkitRequestFullscreen ||
    root.mozRequestFullScreen ||
    root.msRequestFullscreen;
  if (!req) return;
  try {
    const p = req.call(root);
    if (p && typeof p.catch === 'function') p.catch(() => {});
  } catch (_) {}
}

function powerOn() {
  requestAppFullscreen();
  primeMusicDuringPowerOn();

  document.getElementById('poweroff-screen').style.display = 'none';
  document.getElementById('boot-screen').style.display = 'flex';
  document.getElementById('boot-bar').style.width = '0%';
  document.getElementById('boot-messages').innerHTML = '';

  setTimeout(runBoot, 200);
}

// ============================
// ===== ABOUT ME SECTION =====
// ============================
function renderAboutDisplay() {
  const a = PORTFOLIO.about;
  const age = calcAge(a.birthDate);

  // Age display
  document.getElementById('age-display').innerHTML =
    `<span class="age-num">${age.years}</span><span class="age-unit">y</span> ` +
    `<span class="age-num">${age.months}</span><span class="age-unit">m</span> ` +
    `<span class="age-num">${age.days}</span><span class="age-unit">d</span>`;

  const info = document.getElementById('about-info-display');
  const rows = [
    { label: 'Name',       value: a.name       },
    { label: 'Location',   value: a.location    },
    { label: 'Education',  value: a.occupation  },
    { label: 'Interests',  value: a.interests   },
  ];
  info.innerHTML = rows.map(r => `
    <div class="about-info-row">
      <span class="about-label">${escHtml(r.label)}:</span>
      <span class="about-value">${escHtml(r.value)}</span>
    </div>
  `).join('');
}

// ============================
// ===== PROJECTS SECTION =====
// ============================
function renderProjectsGrid() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = PORTFOLIO.projects.map(p => {
    const thumb = p.images?.length
      ? `<img src="${p.images[0]}" alt="${escHtml(p.title)}">`
      : `<div class="project-no-img">${p.emoji}<span>Image Coming Soon</span></div>`;
    return `
      <div class="project-card" ondblclick="viewProject(${p.id})" onclick="viewProject(${p.id})">
        <div class="project-card-thumb">${thumb}</div>
        <div class="project-card-title">${escHtml(p.title)}</div>
        ${p.tags ? `<div class="project-card-tags">${escHtml(p.tags)}</div>` : ''}
        <div class="project-card-actions">
          <button class="win-btn" onclick="event.stopPropagation();viewProject(${p.id})">View ›</button>
        </div>
      </div>
    `;
  }).join('');
}

function viewProject(id) {
  const proj = PORTFOLIO.projects.find(p => p.id === id);
  if (!proj) return;
  const detail = document.getElementById('project-detail-content');

  const imagesHtml = proj.images?.length
    ? `<div class="detail-images">${proj.images.map(src=>`<img src="${src}" onclick="openImageFull('${src}')">`).join('')}</div>`
    : `<div class="detail-img-placeholder"><div class="placeholder-icon">${proj.emoji}</div><div class="placeholder-label">📷 Image Coming Soon</div></div>`;

  const tags = proj.tags ? proj.tags.split(',').map(t=>`<span class="tag-chip">${escHtml(t.trim())}</span>`).join('') : '';
  const linkHtml = proj.url
    ? `<a href="${escHtml(proj.url)}" target="_blank" rel="noopener" class="win-btn link-btn">🔗 Open Project</a>`
    : '';

  detail.innerHTML = `
    <div class="detail-title">${proj.emoji} ${escHtml(proj.title)}</div>
    ${imagesHtml}
    ${tags ? `<div class="detail-tags">${tags}</div>` : ''}
    ${proj.desc ? `<div class="detail-desc">${escHtml(proj.desc)}</div>` : ''}
    ${linkHtml}
  `;
  document.getElementById('projects-list-view').style.display = 'none';
  document.getElementById('project-detail-view').style.display = 'block';
}

function backToProjects() {
  document.getElementById('project-detail-view').style.display = 'none';
  document.getElementById('projects-list-view').style.display = 'block';
}

function openImageFull(src) {
  const w = window.open('','_blank','width=800,height=600');
  w.document.write(`<body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh"><img src="${src}" style="max-width:100%;max-height:100%"></body>`);
}

// ============================
// ===== HOBBIES SECTION ======
// ============================
function renderHobbiesGrid() {
  const grid = document.getElementById('hobbies-grid');
  const h = PORTFOLIO.hobbies;

  function makeCategory(icon, title, items, badge) {
    return `
      <div class="hobby-category">
        <div class="hobby-cat-header">${icon} ${title} ${badge ? `<span class="cat-badge">${badge}</span>` : ''}</div>
        <div class="hobby-cat-items">
          ${items.map(i => {
            const inner = `
              <span class="hobby-item-emoji">${i.emoji}</span>
              <div class="hobby-item-info">
                <div class="hobby-item-name">${escHtml(i.name)}</div>
                <div class="hobby-item-note">${escHtml(i.note)}</div>
              </div>
              ${i.href ? `<span class="hobby-item-link-icon">↗</span>` : ''}
            `;
            return i.href
              ? `<a class="hobby-item hobby-item-link" href="${escHtml(i.href)}" target="_blank" rel="noopener">${inner}</a>`
              : `<div class="hobby-item">${inner}</div>`;
          }).join('')}
        </div>
      </div>
    `;
  }

  grid.innerHTML =
    makeCategory('🎮', 'Video Games',  h.games,  'STEAM')   +
    makeCategory('🎬', 'Movies',        h.movies, 'IMDB')    +
    makeCategory('📺', 'Web Series',    h.series, 'IMDB')    +
    makeCategory('🎵', 'Music Artists', h.music,  'SPOTIFY');
}

// ============================
// ===== CONTACT SECTION ======
// ============================
function renderContactDisplay() {
  const c = PORTFOLIO.contact;
  const links = [
    { icon: '📧', label: 'Email',     value: c.email,     href: `mailto:${c.email}` },
    { icon: '💼', label: 'LinkedIn',  value: 'harshit-jadhav-429960357', href: c.linkedin },
    { icon: '🐙', label: 'GitHub',    value: 'harshooit',  href: c.github    },
    { icon: '📸', label: 'Instagram', value: '@harsho_oit', href: c.instagram },
    { icon: '🎮', label: 'Discord',   value: c.discord,   href: `https://discord.com/users/${c.discord}` },
  ].filter(l => l.value);

  const display = document.getElementById('contact-display');
  display.innerHTML = `
    <div class="contact-header">// SIGNAL THE BAT</div>
    <div class="contact-card">
      ${links.map(l => `
        <a class="contact-link-row" href="${escHtml(l.href)}" target="_blank" rel="noopener">
          <span class="contact-icon">${l.icon}</span>
          <span class="contact-label">${escHtml(l.label)}</span>
          <span class="contact-value">${escHtml(l.value)}</span>
          <span class="contact-arrow">›</span>
        </a>
      `).join('')}
    </div>
  `;
}

// ============================
// ===== UTILS ================
// ============================
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

// ============================
// ===== ACTIVE WINDOW ========
// ============================
function setActiveWindow(id) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('window-active'));
  const win = document.getElementById(id);
  if (win) win.classList.add('window-active');
}

// ============================
// ===== ICON SELECTION =======
// ============================
function selectIcon(e, el) {
  e.stopPropagation();
  document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  el.classList.remove('icon-nudge');
  void el.offsetWidth;
  el.classList.add('icon-nudge');
  setTimeout(() => el.classList.remove('icon-nudge'), 480);
}
function clearDesktopSelection(e) {
  if (!e.target.closest('.desktop-icon') && !e.target.closest('.window') && !e.target.closest('#context-menu')) {
    document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
  }
}

// ============================
// ===== TOAST ================
// ============================
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('toast-show');
  setTimeout(() => t.classList.remove('toast-show'), duration);
}

// ---- Windows-style menu bars (drop-downs) ----
let osMenuListenersAttached = false;

function initOsMenus() {
  document.querySelectorAll('.js-os-menu').forEach((bar) => {
    if (bar.dataset.osBuilt) return;
    const win = bar.closest('.window');
    if (!win || !win.id) return;
    const variant = bar.dataset.menuVariant === 'game' ? 'game' : 'default';
    bar.innerHTML = renderOsMenuBarHtml(variant, win.id);
    bar.dataset.osBuilt = '1';
  });
  document.querySelectorAll('.js-os-menu-shutdown').forEach((bar) => {
    if (bar.dataset.osBuilt) return;
    bar.innerHTML = renderShutdownMenuBarHtml();
    bar.dataset.osBuilt = '1';
  });
  if (!osMenuListenersAttached) {
    osMenuListenersAttached = true;
    document.addEventListener('mousedown', onOsMenuDocumentMouseDown);
    document.addEventListener('click', onOsMenuBarClick, true);
  }
}

function onOsMenuDocumentMouseDown(e) {
  if (e.target.closest('.menu-pull-wrap')) return;
  closeAllOsMenuDropdowns();
}

function onOsMenuBarClick(e) {
  const pull = e.target.closest('.menu-pull');
  const wrap = e.target.closest('.menu-pull-wrap');
  if (!pull || !wrap) return;
  e.stopPropagation();
  const wasOpen = wrap.classList.contains('open');
  closeAllOsMenuDropdowns();
  if (!wasOpen) wrap.classList.add('open');
}

function closeAllOsMenuDropdowns() {
  document.querySelectorAll('.menu-pull-wrap.open').forEach((w) => w.classList.remove('open'));
}

function osMenuCloseDrop() {
  closeAllOsMenuDropdowns();
}

function renderOsMenuBarHtml(variant, winId) {
  const editOrGame =
    variant === 'game'
      ? `<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">Game</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();resetBatGame();startBatGame();">New game</div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();showToast('High score is saved in your browser (local storage).', 2600);">High scores…</div>
  </div>
</div>`
      : `<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">Edit</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item disabled" role="menuitem">Undo<span class="menu-dd-shortcut">Ctrl+Z</span></div>
    <div class="menu-dd-item disabled" role="menuitem">Redo<span class="menu-dd-shortcut">Ctrl+Y</span></div>
    <div class="menu-dd-sep"></div>
    <div class="menu-dd-item disabled" role="menuitem">Cut<span class="menu-dd-shortcut">Ctrl+X</span></div>
    <div class="menu-dd-item disabled" role="menuitem">Copy<span class="menu-dd-shortcut">Ctrl+C</span></div>
    <div class="menu-dd-item disabled" role="menuitem">Paste<span class="menu-dd-shortcut">Ctrl+V</span></div>
  </div>
</div>`;

  return `<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">File</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();fileMenuNew();">New<span class="menu-dd-shortcut">Ctrl+N</span></div>
    <div class="menu-dd-sep"></div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();closeWindow('${winId}');">Close</div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();shutdown();">Exit GothamOS…</div>
  </div>
</div>
${editOrGame}
<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">View</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();viewMenuToolbarToggle(this);">Toolbar<span class="menu-dd-check">✓</span></div>
    <div class="menu-dd-item disabled" role="menuitem">Status Bar<span class="menu-dd-check">✓</span></div>
    <div class="menu-dd-sep"></div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();viewMenuRefresh('${winId}');">Refresh<span class="menu-dd-shortcut">F5</span></div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();viewMenuFullScreenHint();">Full screen<span class="menu-dd-shortcut">F11</span></div>
  </div>
</div>
  </div>
</div>`;
}

function renderShutdownMenuBarHtml() {
  return `<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">Session</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();document.getElementById('shutdown-dialog').style.display='none';">Return to desktop<span class="menu-dd-shortcut">Esc</span></div>
    <div class="menu-dd-item disabled" role="menuitem">Switch user…</div>
  </div>
</div>
<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">Power</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();confirmShutdown();">Shut down now</div>
    <div class="menu-dd-item disabled" role="menuitem">Sleep</div>
  </div>
</div>`;
}

function fileMenuNew() {
  const sm = document.getElementById('start-menu');
  if (sm && sm.style.display !== 'block') toggleStartMenu();
  showToast('Choose a program from the Start menu or double-click a desktop icon.', 3200);
}

function viewMenuRefresh(winId) {
  const win = document.getElementById(winId);
  if (!win) return;
  const body = win.querySelector('.window-body-stack') || win.querySelector('.window-body');
  if (body) {
    body.classList.remove('win-view-flash');
    void body.offsetWidth;
    body.classList.add('win-view-flash');
    setTimeout(() => body.classList.remove('win-view-flash'), 400);
  }
  showToast('Window refreshed.', 1400);
}

function viewMenuToolbarToggle(el) {
  const chk = el && el.querySelector && el.querySelector('.menu-dd-check');
  if (chk) chk.textContent = chk.textContent.trim() === '✓' ? '\u00a0' : '✓';
  showToast('Toolbar option toggled (visual only).', 1800);
}

function viewMenuFullScreenHint() {
  showToast('Use the browser full-screen control or press F11 in most browsers.', 3200);
}



// ============================
// ===== CONTEXT MENU =========
// ============================
function initContextMenu() {
  document.addEventListener('click', e => {
    if (!e.target.closest('#context-menu')) hideCtxMenu();
  });
}
function showCtxMenu(e) {
  e.preventDefault();
  const m = document.getElementById('context-menu');
  const desktop = document.getElementById('desktop');
  const dr = desktop.getBoundingClientRect();
  let x = e.clientX - dr.left, y = e.clientY - dr.top;
  if (x + 200 > dr.width)  x = dr.width  - 205;
  if (y + 220 > dr.height) y = dr.height - 225;
  m.style.left = x + 'px';
  m.style.top  = y + 'px';
  m.style.display = 'block';
  requestAnimationFrame(() => m.classList.add('ctx-show'));
}
function hideCtxMenu() {
  const m = document.getElementById('context-menu');
  m.classList.remove('ctx-show');
  setTimeout(() => { m.style.display = 'none'; }, 150);
}

// ============================
// ===== BIO TYPING ===========
// ============================
const BIO_TEXT = 'A tech-obsessed mind lurking in the shadows of Pune — where circuits meet code and AI rewrites reality. Currently engineering the future as an ECE freshman, chasing every breakthrough in Artificial Intelligence, embedded systems, cloud computing, and the relentless innovation reshaping our world. The city sleeps. The learning never stops.';
let bioTyped = false;
function typeBio() {
  const el = document.getElementById('bio-typed');
  if (!el || bioTyped) return;
  bioTyped = true;
  el.textContent = '';
  let i = 0;
  const iv = setInterval(() => {
    el.textContent += BIO_TEXT[i++];
    if (i >= BIO_TEXT.length) clearInterval(iv);
  }, 18);
}

// ============================
// ===== RAIN EFFECT ==========
// ============================
function initRain() {
  const canvas = document.getElementById('rain-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const drops = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    len: Math.random() * 22 + 10,
    spd: Math.random() * 2.5 + 1,
    op:  Math.random() * 0.18 + 0.04,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drops.forEach(d => {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - 0.8, d.y + d.len);
      ctx.strokeStyle = `rgba(120,160,255,${d.op})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
      d.y += d.spd;
      if (d.y > canvas.height + d.len) { d.y = -d.len; d.x = Math.random() * canvas.width; }
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ============================
// ===== BATMAN EASTER EGG ====
// ============================
function initEasterEgg() {
  let buf = '';
  document.addEventListener('keydown', e => {
    buf = (buf + e.key.toLowerCase()).slice(-6);
    if (buf === 'batman') {
      buf = '';
      triggerBatSignal();
    }
  });
}
function triggerBatSignal() {
  const el = document.getElementById('bat-signal-flash');
  el.textContent = '🦇';
  el.classList.add('bat-flash-active');
  showToast('🦇 I am vengeance. I am the night. I am BATMAN!', 3000);
  setTimeout(() => el.classList.remove('bat-flash-active'), 2500);
}

let desktopInteractivityReady = false;
function initDesktopInteractivity() {
  if (desktopInteractivityReady) return;
  desktopInteractivityReady = true;
  const desktop = document.getElementById('desktop');
  if (!desktop) return;

  desktop.addEventListener('click', (e) => {
    if (
      e.target.closest('.window') ||
      e.target.closest('#taskbar') ||
      e.target.closest('#music-disc') ||
      e.target.closest('#context-menu') ||
      e.target.closest('.desktop-icon')
    ) {
      return;
    }
    spawnClickRipple(desktop, e.clientX, e.clientY);
  });

  desktop.querySelectorAll('.window').forEach((win) => {
    win.addEventListener('mousedown', () => {
      if (!win.id || win.classList.contains('shutdown-window')) return;
      if (win.style.display === 'block') setActiveWindow(win.id);
    });
  });

  document.addEventListener('keydown', desktopKeyShortcuts);
}

function spawnClickRipple(root, cx, cy) {
  const r = document.createElement('div');
  r.className = 'click-ripple';
  const rect = root.getBoundingClientRect();
  r.style.left = `${cx - rect.left}px`;
  r.style.top = `${cy - rect.top}px`;
  root.appendChild(r);
  r.addEventListener('animationend', () => r.remove(), { once: true });
}

function desktopKeyShortcuts(e) {
  const desktop = document.getElementById('desktop');
  if (!desktop || desktop.style.display === 'none') return;
  const t = e.target;
  if (t && (t.closest?.('input') || t.closest?.('textarea') || t.closest?.('[contenteditable]'))) return;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  if (e.code === 'Escape') {
    if (document.querySelector('.menu-pull-wrap.open')) {
      e.preventDefault();
      closeAllOsMenuDropdowns();
      return;
    }
  }


  const map = {
    Digit1: 'about',
    Digit2: 'projects',
    Digit3: 'hobbies',
    Digit4: 'game',
    Digit5: 'contact',
  };
  const win = map[e.code];
  if (win) {
    e.preventDefault();
    openWindow(win);
  }
}

// ============================
// ===== BAT GAME =====
// ============================
const BAT_GAME = {
  running: false,
  loopId: null,
  canvas: null,
  ctx: null,
  width: 560,
  height: 260,
  bat: { x: 72, y: 120, vy: 0, width: 18, height: 18 },
  batImage: null,
  pipes: [],
  score: 0,
  highScore: 0,
  spawnCountdown: 0,
  lastTime: 0,
  gameOver: false,
  gravity: 0.35,
  jump: -7.5,
  speed: 2.4,
};

function loadBatImage() {
  if (BAT_GAME.batImage) return Promise.resolve(BAT_GAME.batImage);
  return new Promise((resolve) => {
    const img = new Image();
    img.src = 'media/batman.png';
    img.onload = () => {
      BAT_GAME.batImage = img;
      resolve(img);
    };
    img.onerror = () => {
      console.warn('Batman image not found, using fallback rectangle');
      resolve(null);
    };
  });
}

function initBatGame() {
  if (BAT_GAME.canvas) return;
  const canvas = document.getElementById('game-canvas');
  if (!canvas) return;
  BAT_GAME.canvas = canvas;
  BAT_GAME.ctx = canvas.getContext('2d');
  loadBatImage();
  canvas.addEventListener('click', () => {
    const win = document.getElementById('win-game');
    if (win && win.style.display === 'block') flapBat();
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
      const win = document.getElementById('win-game');
      if (win && win.style.display === 'block') {
        e.preventDefault();
        flapBat();
      }
    }
  });
  loadBatHighScore();
  resetBatGame();
}

function loadBatHighScore() {
  const stored = localStorage.getItem('gothamos-bat-highscore');
  BAT_GAME.highScore = stored ? Number(stored) : 0;
  updateBatGameStats();
}

function saveBatHighScore() {
  if (BAT_GAME.score > BAT_GAME.highScore) {
    BAT_GAME.highScore = BAT_GAME.score;
    localStorage.setItem('gothamos-bat-highscore', String(BAT_GAME.highScore));
  }
  updateBatGameStats();
}

function updateBatGameStats() {
  const scoreEl = document.getElementById('game-score');
  const highEl = document.getElementById('game-highscore');
  if (scoreEl) scoreEl.textContent = `Score: ${BAT_GAME.score}`;
  if (highEl) highEl.textContent = `High Score: ${BAT_GAME.highScore}`;
}

function startBatGame() {
  if (!BAT_GAME.canvas) initBatGame();
  if (!BAT_GAME.canvas) return;
  if (BAT_GAME.running) return;
  BAT_GAME.running = true;
  BAT_GAME.gameOver = false;
  BAT_GAME.lastTime = performance.now();
  BAT_GAME.loopId = requestAnimationFrame(batGameLoop);
}

function resetBatGame() {
  BAT_GAME.running = false;
  if (BAT_GAME.loopId) cancelAnimationFrame(BAT_GAME.loopId);
  BAT_GAME.loopId = null;
  BAT_GAME.pipes = [];
  BAT_GAME.score = 0;
  BAT_GAME.bat.y = 120;
  BAT_GAME.bat.vy = 0;
  BAT_GAME.gameOver = false;
  BAT_GAME.spawnCountdown = 0;
  updateBatGameStats();
  drawBatGame();
}

function stopBatGame() {
  BAT_GAME.running = false;
  if (BAT_GAME.loopId) cancelAnimationFrame(BAT_GAME.loopId);
  BAT_GAME.loopId = null;
}

function flapBat() {
  if (!BAT_GAME.canvas) initBatGame();
  if (BAT_GAME.gameOver) return;
  if (!BAT_GAME.running) {
    resetBatGame();
    startBatGame();
  }
  BAT_GAME.bat.vy = BAT_GAME.jump;
}

function batGameLoop(timestamp) {
  if (!BAT_GAME.running) return;
  const delta = Math.min(40, timestamp - BAT_GAME.lastTime);
  BAT_GAME.lastTime = timestamp;
  updateBatGame(delta / 16);
  drawBatGame();
  if (BAT_GAME.running) BAT_GAME.loopId = requestAnimationFrame(batGameLoop);
}

function updateBatGame(delta) {
  BAT_GAME.bat.vy += BAT_GAME.gravity * delta;
  BAT_GAME.bat.y += BAT_GAME.bat.vy * delta;
  BAT_GAME.spawnCountdown -= delta;
  if (BAT_GAME.spawnCountdown <= 0) {
    const gap = 72 + Math.random() * 40;
    const top = 32 + Math.random() * 96;
    BAT_GAME.pipes.push({ x: BAT_GAME.width, width: 26, top, bottom: top + gap, scored: false });
    BAT_GAME.spawnCountdown = 92;
  }
  BAT_GAME.pipes.forEach(pipe => {
    pipe.x -= BAT_GAME.speed * delta;
    if (!pipe.scored && pipe.x + pipe.width < BAT_GAME.bat.x) {
      pipe.scored = true;
      BAT_GAME.score++;
      updateBatGameStats();
    }
  });
  BAT_GAME.pipes = BAT_GAME.pipes.filter(pipe => pipe.x + pipe.width > -20);
  if (BAT_GAME.bat.y < 0 || BAT_GAME.bat.y + BAT_GAME.bat.height > BAT_GAME.height) {
    BAT_GAME.gameOver = true;
  }
  for (const pipe of BAT_GAME.pipes) {
    if (BAT_GAME.bat.x + BAT_GAME.bat.width > pipe.x && BAT_GAME.bat.x < pipe.x + pipe.width) {
      if (BAT_GAME.bat.y < pipe.top || BAT_GAME.bat.y + BAT_GAME.bat.height > pipe.bottom) {
        BAT_GAME.gameOver = true;
        break;
      }
    }
  }
  if (BAT_GAME.gameOver) {
    stopBatGame();
    saveBatHighScore();
  }
}

function drawBatGame() {
  const ctx = BAT_GAME.ctx;
  const canvas = BAT_GAME.canvas;
  if (!ctx || !canvas) return;
  ctx.fillStyle = '#05050d';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#11152e';
  for (let x = 0; x < canvas.width; x += 16) {
    ctx.fillRect(x, canvas.height - 8, 12, 2);
  }
  BAT_GAME.pipes.forEach(pipe => {
    ctx.fillStyle = '#1f233f';
    ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height - pipe.bottom);
    ctx.fillStyle = '#272b54';
    ctx.fillRect(pipe.x + 4, 0, pipe.width - 8, pipe.top);
    ctx.fillRect(pipe.x + 4, pipe.bottom, pipe.width - 8, canvas.height - pipe.bottom);
  });
  
  // Draw bat (image or fallback)
  if (BAT_GAME.batImage) {
    ctx.drawImage(BAT_GAME.batImage, BAT_GAME.bat.x, BAT_GAME.bat.y, BAT_GAME.bat.width, BAT_GAME.bat.height);
  } else {
    ctx.fillStyle = '#f0c040';
    ctx.fillRect(BAT_GAME.bat.x, BAT_GAME.bat.y, BAT_GAME.bat.width, BAT_GAME.bat.height);
    ctx.fillStyle = '#0a0a0f';
    ctx.fillRect(BAT_GAME.bat.x + 3, BAT_GAME.bat.y + 4, BAT_GAME.bat.width - 6, BAT_GAME.bat.height - 8);
    ctx.strokeStyle = '#f8d86a';
    ctx.lineWidth = 2;
    ctx.strokeRect(BAT_GAME.bat.x + 2, BAT_GAME.bat.y + 2, BAT_GAME.bat.width - 4, BAT_GAME.bat.height - 4);
  }
  
  if (BAT_GAME.gameOver) {
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f0c040';
    ctx.font = 'bold 20px Share Tech Mono';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 12);
    ctx.font = '12px Share Tech Mono';
    ctx.fillText('Click Start or press Space to play again', canvas.width / 2, canvas.height / 2 + 14);
  }
}

