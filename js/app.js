// ===== DEVSHELL OS — HARSHIT JADHAV PORTFOLIO =====
// Read-only portfolio. All data hardcoded below.

// ---- HARDCODED PORTFOLIO DATA ----
const PORTFOLIO = {
  about: {
    name: 'Harshit Prabhakar Jadhav',
    birthDate: '2007-09-08',
    gender: 'Male',
    location: 'Pune, India',
    college: 'Shri Dharmasthala Manjunatheshwara College of Engineering and Technology (SDMCET), Dharwad',
    degree: 'B.E. — Electronics & Communication Engineering',
    year: '1st Year',
    headline: 'Electronics & Communication Engineering Student · Aspiring AI & Software Developer',
    focusAreas: 'Software Development, Artificial Intelligence, Embedded Systems, ECE, Cloud & Emerging Tech',
    openToWork: true,
    resumeUrl: '',
    summary: [
      'I am an 18-year-old Electronics and Communication Engineering student at Shri Dharmasthala Manjunatheshwara College of Engineering and Technology (SDMCET), Dharwad, based in Pune, India. My interests span electronics, software development, and artificial intelligence — bridging hardware fundamentals with code that ships.',
      'A curious engineer driven by problem-solving, I enjoy transforming ideas into intelligent, practical systems — from embedded circuits and computer vision to cloud and application-level projects. I am open to internships, collaborations, freelance work, and any role where I can learn and contribute across technology, AI, and the wider ECE landscape.',
      'I approach new tools, domains, and challenges with enthusiasm and adaptability. Always learning, always building — I am actively seeking opportunities to grow alongside teams and projects that push what is possible, one line of code at a time.',
    ],
  },

  skills: [
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'Arduino / ESP32', level: 90, icon: '🔌' },
    { name: 'Computer Vision', level: 75, icon: '👁️' },
    { name: 'AI / ML', level: 70, icon: '🤖' },
    { name: 'Cloud (Azure)', level: 65, icon: '☁️' },
    { name: 'C / C++', level: 80, icon: '⚙️' },
    { name: 'Web Dev', level: 70, icon: '🌐' },
    { name: 'Circuit Design', level: 85, icon: '🔧' },
  ],

  projects: [
    {
      id: 1,
      title: 'Hand Tracking System',
      emoji: '🖐️',
      desc: 'A real-time hand tracking system built using Google MediaPipe. Detects and tracks hand landmarks via webcam with high accuracy and low latency — bridging the gap between human gesture and machine input.',
      tags: 'MediaPipe, Python, Computer Vision, AI',
      url: 'https://harshitstrashideas.netlify.app/',
      images: [
        'media/projects/Hand Tracking/Screenshot_20260605_204935_Chrome.jpg',
        'media/projects/Hand Tracking/Screenshot_20260605_205019_Chrome.jpg',
        'media/projects/Hand Tracking/Screenshot_20260605_205028_Chrome.jpg'
      ],
      video: 'media/projects/Hand Tracking/Screen_Recording_20260605_205201_Chrome.mp4',
    },
    {
      id: 2,
      title: 'Clap Switch Circuit',
      emoji: '👏',
      desc: 'Designed and built an analog clap-activated switch circuit using resistors and capacitors. Captures sound vibrations and toggles an LED on/off — a hands-free, micro-controller-free smart switch.',
      tags: 'Electronics, Analog Circuits, Resistors, Capacitors',
      url: '',
      images: [
        'media/projects/Clap Switch/Screenshot_20260605_204120_Google.jpg',
        'media/projects/Clap Switch/Screenshot_20260605_205822_Video Player.jpg',
        'media/projects/Clap Switch/Screenshot_20260605_205836_Video Player.jpg'
      ],
      video: 'media/projects/Clap Switch/VID-20251130-WA0000.mp4',
    },
    {
      id: 3,
      title: 'Line Follower Robot',
      emoji: '🤖',
      desc: 'Engineered an autonomous line-following robot using Arduino UNO. The bot uses IR sensors to detect a black line and steers itself in real-time — fully autonomous navigation without any human input.',
      tags: 'Arduino UNO, Robotics, IR Sensors, Embedded Systems',
      url: '',
      images: [
        'media/projects/line follower/IMG-20260605-WA0036.jpg',
        'media/projects/line follower/20260413_225926.jpg',
        'media/projects/line follower/IMG-20260605-WA0038.jpg',
        'media/projects/line follower/IMG-20260605-WA0039.jpg'
      ],
      video: 'media/projects/line follower/20260417_140517.mp4',
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
      { name: 'The Walking Dead Series', emoji: '🧟', note: 'Clementine forever.', href: 'https://store.steampowered.com/app/207610/' },
      { name: 'Red Dead Redemption 2', emoji: '🤠', note: 'Greatest open world ever made.', href: 'https://store.steampowered.com/app/1174180/' },
      { name: 'Cyberpunk 2077', emoji: '🌃', note: 'Welcome to Night City.', href: 'https://store.steampowered.com/app/1091500/' },
      { name: "Assassin's Creed Series", emoji: '🗡️', note: 'Nothing is true, everything is permitted.', href: 'https://store.steampowered.com/franchise/assassinscreed' },
    ],
    movies: [
      { name: 'Interstellar', emoji: '🚀', note: 'Do not go gentle into that good night.', href: 'https://www.imdb.com/title/tt0816692/' },
      { name: 'The Matrix', emoji: '💊', note: 'There is no spoon.', href: 'https://www.imdb.com/title/tt0133093/' },
      { name: 'Inception', emoji: '🌀', note: 'You mustn\'t be afraid to dream bigger.', href: 'https://www.imdb.com/title/tt1375666/' },
      { name: 'Oppenheimer', emoji: '☢️', note: 'Now I am become Death.', href: 'https://www.imdb.com/title/tt15398776/' },
      { name: 'Fight Club', emoji: '🥊', note: 'First rule: you do not talk about it.', href: 'https://www.imdb.com/title/tt0137523/' },
      { name: 'Inglourious Basterds', emoji: '🎬', note: 'Bingo! That\'s a bingo!', href: 'https://www.imdb.com/title/tt0361748/' },
      { name: 'The Social Network', emoji: '💻', note: 'A million dollars isn\'t cool.', href: 'https://www.imdb.com/title/tt1285016/' },
      { name: 'Se7en', emoji: '🔦', note: "What's in the box?!", href: 'https://www.imdb.com/title/tt0114369/' },
    ],
    series: [
      { name: 'Breaking Bad', emoji: '🧪', note: 'I am the one who knocks.', href: 'https://www.imdb.com/title/tt0903747/' },
      { name: 'Friends', emoji: '☕', note: 'Could it BE any better?', href: 'https://www.imdb.com/title/tt0108778/' },
      { name: 'Game of Thrones', emoji: '👑', note: 'Winter is coming.', href: 'https://www.imdb.com/title/tt0944947/' },
      { name: 'Chernobyl', emoji: '☣️', note: 'What is the cost of lies?', href: 'https://www.imdb.com/title/tt7366338/' },
      { name: 'Brooklyn Nine-Nine', emoji: '🚔', note: 'Cool cool cool cool cool.', href: 'https://www.imdb.com/title/tt2467372/' },
    ],
    music: [
      { name: 'TV Girl', emoji: '📺', note: 'Who really cares?', href: 'https://open.spotify.com/artist/0Y6dVaC9DZtPNH4591M42W' },
      { name: 'Arctic Monkeys', emoji: '🐒', note: 'Do I wanna know?', href: 'https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH' },
      { name: 'Chase Atlantic', emoji: '🌊', note: 'Into it.', href: 'https://open.spotify.com/artist/7wbkd7VbDOlDpDUFORxitY' },
      { name: 'The Neighbourhood', emoji: '🖤', note: 'Sweater Weather hits different.', href: 'https://open.spotify.com/artist/77SW9BnxLY8rJ0RciFqkHh' },
    ],
  },

  contact: {
    email: 'hpjadhav3000@gmail.com',
    linkedin: 'https://www.linkedin.com/in/harshit-jadhav-429960357/',
    github: 'https://github.com/harshooit',
    instagram: 'https://www.instagram.com/harsho_oit/',
    discord: 'harsho_oit',
  },
};

// ---- BOOT SEQUENCE ----
window.addEventListener('DOMContentLoaded', () => {
  renderAboutDisplay();
  renderProjectsGrid();
  renderHobbiesGrid();
  renderContactDisplay();
  updateClock();
  setInterval(updateClock, 1000);
  document.addEventListener('click', closeSideEffects);
});

const BOOT_MSGS = [
  'HARSHIT PRABHAKAR JADHAV // DevShell OS v1.0',
  'Loading kernel modules and dev toolchain...',
  'Initializing AI inference engine...',
  'Decrypting project archives...',
  'Mounting /home/portfolio...',
  'Network stack online. SSH ready.',
  'System ready. Welcome, developer.',
];

function runBoot() {
  const bar = document.getElementById('boot-bar');
  const msgs = document.getElementById('boot-messages');
  let pct = 0, msgIdx = 0;

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
  initAllEnhancements();
  setTimeout(() => showToast('> Welcome, developer. DevShell OS is online.', 3500), 600);

  const video = document.getElementById('wallpaper-video');
  if (video) video.play().catch(() => { });

  ensureBackgroundAudio(true);
}

// ---- BACKGROUND MUSIC ----
function primeMusicDuringPowerOn() {
  const music = document.getElementById('bg-music');
  if (!music) return;
  music.volume = 0.07;
  music.muted = true;
  music.currentTime = 0;
  const p = music.play();
  if (p && typeof p.catch === 'function') p.catch(() => { });
}

function ensureBackgroundAudio(resetToStart) {
  const music = document.getElementById('bg-music');
  if (!music) return;
  if (resetToStart) music.currentTime = 0;
  music.muted = false;
  music.volume = 0.07;
  const p = music.play();
  if (p && typeof p.catch === 'function') p.catch(() => attachMusicResumeFallback());
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
      playP.then(() => {
        document.removeEventListener('pointerdown', resume, opts);
        musicResumeAttached = false;
      }).catch(() => { });
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

function toggleMusicMute() {
  const music = document.getElementById('bg-music');
  const video = document.getElementById('wallpaper-video');
  if (music) {
    music.muted = !music.muted;
    if (video) video.muted = music.muted;
    if (music.muted) {
      showToast('🔇 Audio muted', 1500);
    } else {
      music.play().catch(() => { });
      if (video) video.play().catch(() => { });
      showToast('🔊 Audio unmuted', 1500);
    }
    syncMusicDiscVisual();
  }
}

// ---- CLOCK ----
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateStr = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]}`;
  document.getElementById('taskbar-clock').innerHTML =
    `<div class="clock-time">${h}:${m}</div><div class="clock-date">${dateStr}</div>`;
}

// ---- AGE CALCULATOR ----
function calcAge(birthDateStr) {
  const birth = new Date(birthDateStr);
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) { years--; months += 12; }
  return { years, months, days };
}

// ============================
// ===== WINDOW MANAGEMENT ====
// ============================
let zTop = 20;
const windowMeta = {};

function openWindow(name) {
  const id = `win-${name}`;
  const win = document.getElementById(id);
  if (!win) return;

  // FIX: must be 'flex' so the flex-column layout activates and window-body can scroll
  win.style.display = 'flex';
  win.style.zIndex = ++zTop;
  windowMeta[id] = windowMeta[id] || {};
  windowMeta[id].minimized = false;
  addTaskbarBtn(id, name);
  closeStartMenu();
  setActiveWindow(id);

  // Re-attach wheel listeners every time a window opens (covers dynamically-added content)
  win.querySelectorAll('.window-body, .window-body-stack, #about-view, #hobbies-list-view, #project-detail-view, #projects-list-view, #contact-display-view').forEach(attachWheelScroll);

  win.classList.remove('window-pop');
  void win.offsetWidth;
  win.classList.add('window-pop');
}

function closeWindow(id) {
  const win = document.getElementById(id);
  if (win) win.style.display = 'none';
  removeTaskbarBtn(id);
}

function minimizeWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;
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
    if (prev) {
      win.style.top = prev.top;
      win.style.left = prev.left;
      win.style.width = prev.width;
      win.style.height = prev.height || '';
    }
  } else {
    windowMeta[id] = windowMeta[id] || {};
    windowMeta[id].maxPrev = {
      top: win.style.top,
      left: win.style.left,
      width: win.style.width,
      height: win.style.height,
    };
    win.classList.add('maximized');
  }
}

function addTaskbarBtn(id, name) {
  if (document.getElementById('tbtn-' + id)) return;
  const labels = {
    'win-about': '🧬 About',
    'win-projects': '💻 Projects',
    'win-hobbies': '⭐ Favourites',
    'win-contact': '📡 Contact',
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
    // FIX: must be 'flex' here too
    win.style.display = 'flex';
    win.style.zIndex = ++zTop;
    meta.minimized = false;
    updateTaskbarBtn(id, false);
    setActiveWindow(id);

    // Re-attach wheel listeners after restore
    win.querySelectorAll('.window-body, .window-body-stack, #about-view, #hobbies-list-view, #project-detail-view, #projects-list-view, #contact-display-view').forEach(attachWheelScroll);

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
  dragData.win.style.top = (dragData.origTop + e.clientY - dragData.startY) + 'px';
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

// ---- FULLSCREEN ----
function requestAppFullscreen() {
  if (document.fullscreenElement || document.webkitFullscreenElement) return;
  const root = document.documentElement;
  const req = root.requestFullscreen || root.webkitRequestFullscreen || root.mozRequestFullScreen || root.msRequestFullscreen;
  if (!req) return;
  try { const p = req.call(root); if (p && typeof p.catch === 'function') p.catch(() => { }); } catch (_) { }
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

  document.getElementById('age-display').innerHTML =
    `<span class="age-num">${age.years}</span><span class="age-unit">y</span> ` +
    `<span class="age-num">${age.months}</span><span class="age-unit">m</span> ` +
    `<span class="age-num">${age.days}</span><span class="age-unit">d</span>`;

  const info = document.getElementById('about-info-display');
  const openBadge = a.openToWork
    ? '<div class="about-open-badge"><span class="about-open-dot"></span>Open to opportunities</div>'
    : '';

  const rows = [
    { label: 'Name', value: a.name },
    { label: 'Profile', value: `${age.years} · ${a.gender}` },
    { label: 'Location', value: a.location },
    { label: 'Degree', value: `${a.degree} (${a.year})` },
    { label: 'Institution', value: a.college },
    { label: 'Focus Areas', value: a.focusAreas },
    { label: 'Availability', value: 'Open to internships, projects & tech roles' },
  ];

  info.innerHTML = `
    ${openBadge}
    <p class="about-profile-headline">${escHtml(a.headline)}</p>
    ${rows.map(r => `
      <div class="about-info-row">
        <span class="about-label">${escHtml(r.label)}:</span>
        <span class="about-value">${escHtml(r.value)}</span>
      </div>
    `).join('')}
  `;

  const summaryEl = document.getElementById('about-summary');
  if (summaryEl && Array.isArray(a.summary)) {
    summaryEl.innerHTML = a.summary.map(p => `<p class="about-summary-p">${escHtml(p)}</p>`).join('');
  }

  const skillsContainer = document.getElementById('skills-display');
  if (skillsContainer && PORTFOLIO.skills) {
    skillsContainer.innerHTML = PORTFOLIO.skills.map((s, i) => `
      <div class="skill-row" style="animation-delay: ${i * 0.08}s" onmouseenter="highlightSkill(this)" onmouseleave="unhighlightSkill(this)">
        <div class="skill-header">
          <span class="skill-icon">${s.icon}</span>
          <span class="skill-name">${escHtml(s.name)}</span>
          <span class="skill-pct">${s.level}%</span>
        </div>
        <div class="skill-bar-outer">
          <div class="skill-bar-inner" style="--skill-level: ${s.level}%"></div>
        </div>
      </div>
    `).join('');
  }

  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn) {
    if (a.resumeUrl) {
      resumeBtn.href = a.resumeUrl;
      resumeBtn.classList.remove('disabled');
    } else {
      resumeBtn.removeAttribute('href');
      resumeBtn.classList.add('disabled');
      resumeBtn.title = 'Resume coming soon';
    }
  }
}

// Skill hover effects
function highlightSkill(el) {
  // Add subtle pulse effect to the skill bar
  const bar = el.querySelector('.skill-bar-inner');
  if (bar) {
    bar.style.animationPlayState = 'paused';
  }
}

function unhighlightSkill(el) {
  const bar = el.querySelector('.skill-bar-inner');
  if (bar) {
    bar.style.animationPlayState = 'running';
  }
}

// ============================
// ===== PROJECTS SECTION =====
// ============================
let projectFilter = 'all';
let projectSort = 'default';

function renderProjectsGrid() {
  const grid = document.getElementById('projects-grid');
  
  // Add filter and sort controls
  const controls = `
    <div class="project-controls">
      <div class="project-filter-group">
        <label class="filter-label">FILTER:</label>
        <button class="filter-btn ${projectFilter === 'all' ? 'active' : ''}" onclick="filterProjects('all')">All</button>
        <button class="filter-btn ${projectFilter === 'hardware' ? 'active' : ''}" onclick="filterProjects('hardware')">Hardware</button>
        <button class="filter-btn ${projectFilter === 'software' ? 'active' : ''}" onclick="filterProjects('software')">Software</button>
        <button class="filter-btn ${projectFilter === 'cloud' ? 'active' : ''}" onclick="filterProjects('cloud')">Cloud</button>
      </div>
      <div class="project-sort-group">
        <label class="filter-label">SORT:</label>
        <button class="filter-btn ${projectSort === 'default' ? 'active' : ''}" onclick="sortProjects('default')">Default</button>
        <button class="filter-btn ${projectSort === 'name' ? 'active' : ''}" onclick="sortProjects('name')">Name</button>
      </div>
    </div>
  `;
  
  // Filter projects
  let filteredProjects = PORTFOLIO.projects;
  if (projectFilter !== 'all') {
    filteredProjects = PORTFOLIO.projects.filter(p => {
      const tags = p.tags.toLowerCase();
      if (projectFilter === 'hardware') return tags.includes('arduino') || tags.includes('circuit') || tags.includes('robot') || tags.includes('electronics');
      if (projectFilter === 'software') return tags.includes('python') || tags.includes('mediapipe') || tags.includes('computer vision') || tags.includes('ai');
      if (projectFilter === 'cloud') return tags.includes('cloud') || tags.includes('azure');
      return true;
    });
  }
  
  // Sort projects
  if (projectSort === 'name') {
    filteredProjects = [...filteredProjects].sort((a, b) => a.title.localeCompare(b.title));
  }
  
  const projectCards = filteredProjects.map(p => {
    const thumb = p.images?.length
      ? `<img src="${p.images[0]}" alt="${escHtml(p.title)}" loading="lazy">`
      : `<div class="project-no-img">${p.emoji}<span>No Preview</span></div>`;
    return `
      <div class="project-card" onclick="viewProject(${p.id})" data-project-id="${p.id}">
        <div class="project-card-thumb">${thumb}</div>
        <div class="project-card-content">
          <div class="project-card-title">${escHtml(p.title)}</div>
          ${p.tags ? `<div class="project-card-tags">${escHtml(p.tags)}</div>` : ''}
          <div class="project-card-actions">
            <button class="win-btn" onclick="event.stopPropagation();viewProject(${p.id})">View Details ›</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  grid.innerHTML = controls + '<div class="projects-grid-container">' + projectCards + '</div>';
}

function filterProjects(filter) {
  projectFilter = filter;
  renderProjectsGrid();
  showToast(`Filtered: ${filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}`, 1500);
}

function sortProjects(sort) {
  projectSort = sort;
  renderProjectsGrid();
  showToast(`Sorted by: ${sort === 'default' ? 'Default Order' : 'Name'}`, 1500);
}

function viewProject(id) {
  const proj = PORTFOLIO.projects.find(p => p.id === id);
  if (!proj) return;
  const detail = document.getElementById('project-detail-content');

  // Project link button at top (if available)
  const linkHtml = proj.url
    ? `<a href="${escHtml(proj.url)}" target="_blank" rel="noopener" class="win-btn link-btn project-link-top">🔗 Open Live Project</a>`
    : '';

  // Image gallery or placeholder
  let imagesHtml = '';
  if (proj.images?.length) {
    imagesHtml = `
      <div class="detail-images-gallery">
        <div class="detail-main-image">
          <img src="${proj.images[0]}" alt="${escHtml(proj.title)}" id="main-project-img" onclick="openImageFull('${proj.images[0]}')">
        </div>
        ${proj.images.length > 1 ? `
          <div class="detail-thumbnails">
            ${proj.images.map((src, idx) => `
              <img src="${src}" alt="${escHtml(proj.title)} ${idx + 1}" 
                class="detail-thumbnail ${idx === 0 ? 'active' : ''}" 
                onclick="switchMainImage('${src}', this)">
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  } else {
    imagesHtml = `
      <div class="detail-img-placeholder">
        <div class="placeholder-icon">${proj.emoji}</div>
        <div class="placeholder-label">📷 Image Coming Soon</div>
      </div>
    `;
  }

  let videoHtml = '';
  if (proj.video !== undefined) {
    videoHtml = `
      <div class="detail-video-section">
        <div class="detail-section-label">📹 PROJECT DEMO</div>
        <div class="detail-video-wrap">
          <video class="detail-video" controls preload="metadata" playsinline poster="">
            <source src="${escHtml(proj.video)}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="detail-video-fallback" id="video-fallback-${proj.id}">
            <div class="video-fallback-icon">🎬</div>
            <div class="video-fallback-text">Place <code>${escHtml(proj.video.split('/').pop())}</code> in /media/ folder</div>
          </div>
        </div>
      </div>
    `;
  }

  const tags = proj.tags ? proj.tags.split(',').map(t => `<span class="tag-chip">${escHtml(t.trim())}</span>`).join('') : '';

  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-title">${proj.emoji} ${escHtml(proj.title)}</div>
      ${linkHtml}
    </div>
    ${tags ? `<div class="detail-tags">${tags}</div>` : ''}
    ${proj.desc ? `<div class="detail-desc">${escHtml(proj.desc)}</div>` : ''}
    <div class="detail-section-label">📸 PROJECT GALLERY</div>
    ${imagesHtml}
    ${videoHtml}
    <div class="detail-footer">
      <div class="detail-stats">
        <span class="detail-stat"><span class="stat-icon">📷</span> ${proj.images?.length || 0} Photos</span>
        <span class="detail-stat"><span class="stat-icon">🎬</span> ${proj.video ? '1 Video' : 'No Video'}</span>
        <span class="detail-stat"><span class="stat-icon">🏷️</span> ${proj.tags ? proj.tags.split(',').length : 0} Tags</span>
      </div>
    </div>
  `;

  // Video error → show fallback
  if (proj.video !== undefined) {
    const videoEl = detail.querySelector('.detail-video');
    const fallbackEl = detail.querySelector(`#video-fallback-${proj.id}`);
    if (videoEl && fallbackEl) {
      const showFallback = () => { videoEl.style.display = 'none'; fallbackEl.style.display = 'flex'; };
      videoEl.addEventListener('error', showFallback, true);
      const sourceEl = videoEl.querySelector('source');
      if (sourceEl) sourceEl.addEventListener('error', showFallback);
    }
  }

  document.getElementById('projects-list-view').style.display = 'none';
  document.getElementById('project-detail-view').style.display = 'block';

  // FIX: reset scroll and attach wheel listener to the detail view
  const detailView = document.getElementById('project-detail-view');
  if (detailView) {
    detailView.scrollTop = 0;
    attachWheelScroll(detailView);
  }
}

function switchMainImage(src, thumbnail) {
  const mainImg = document.getElementById('main-project-img');
  if (mainImg) {
    mainImg.src = src;
    mainImg.onclick = () => openImageFull(src);
  }
  
  // Update active thumbnail
  document.querySelectorAll('.detail-thumbnail').forEach(t => t.classList.remove('active'));
  if (thumbnail) thumbnail.classList.add('active');
}

function backToProjects() {
  document.getElementById('project-detail-view').style.display = 'none';
  document.getElementById('projects-list-view').style.display = 'block';
  const listView = document.getElementById('projects-list-view');
  if (listView) attachWheelScroll(listView);
}

function openImageFull(src) {
  const w = window.open('', '_blank', 'width=800,height=600');
  w.document.write(`<body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh"><img src="${src}" style="max-width:100%;max-height:100%"></body>`);
}

// ============================
// ===== HOBBIES SECTION ======
// ============================
function renderHobbiesGrid() {
  const grid = document.getElementById('hobbies-grid');
  const h = PORTFOLIO.hobbies;

  let catIdx = 0;
  function makeCategory(icon, title, items, badge) {
    const ci = catIdx++;
    return `
      <div class="hobby-category hobby-cat-reveal" style="animation-delay: ${ci * 0.1}s">
        <div class="hobby-cat-header">
          <span class="hobby-cat-icon">${icon}</span>
          <span class="hobby-cat-title">${title}</span>
          ${badge ? `<span class="cat-badge">${badge}</span>` : ''}
        </div>
        <div class="hobby-cat-items">
          ${items.map((i, idx) => {
      const inner = `
              <span class="hobby-item-emoji">${i.emoji}</span>
              <div class="hobby-item-info">
                <div class="hobby-item-name">${escHtml(i.name)}</div>
                <div class="hobby-item-note">${escHtml(i.note)}</div>
              </div>
              ${i.href ? `<span class="hobby-item-link-icon">↗</span>` : ''}
            `;
      const style = `style="animation-delay: ${(ci * 0.1) + (idx * 0.05)}s"`;
      return i.href
        ? `<a class="hobby-item hobby-item-link hobby-item-reveal" ${style} href="${escHtml(i.href)}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="hobby-item hobby-item-reveal" ${style}>${inner}</div>`;
    }).join('')}
        </div>
      </div>
    `;
  }

  grid.innerHTML =
    makeCategory('🎮', 'Video Games', h.games, 'STEAM') +
    makeCategory('🎬', 'Movies', h.movies, 'IMDB') +
    makeCategory('📺', 'Web Series', h.series, 'IMDB') +
    makeCategory('🎵', 'Music Artists', h.music, 'SPOTIFY');
}

// ============================
// ===== CONTACT SECTION ======
// ============================
function renderContactDisplay() {
  const c = PORTFOLIO.contact;
  const links = [
    { icon: '📧', label: 'Email', value: c.email, href: `mailto:${c.email}`, copyable: true },
    { icon: '💼', label: 'LinkedIn', value: 'harshit-jadhav-429960357', href: c.linkedin, copyable: false },
    { icon: '🐙', label: 'GitHub', value: 'harshooit', href: c.github, copyable: false },
    { icon: '📸', label: 'Instagram', value: '@harsho_oit', href: c.instagram, copyable: false },
    { icon: '🎮', label: 'Discord', value: c.discord, href: `https://discord.com/users/${c.discord}`, copyable: true },
  ].filter(l => l.value);

  const display = document.getElementById('contact-display');
  display.innerHTML = `
    <div class="contact-header">
      <span class="contact-header-icon">📡</span>
      <span>// OPEN_CHANNEL</span>
    </div>
    <div class="contact-subtitle">Reach out through any channel below</div>
    <div class="contact-card">
      ${links.map((l, i) => `
        <div class="contact-link-wrapper contact-row-reveal" style="animation-delay: ${i * 0.08}s">
          <a class="contact-link-row" href="${escHtml(l.href)}" target="_blank" rel="noopener">
            <span class="contact-icon">${l.icon}</span>
            <span class="contact-label">${escHtml(l.label)}</span>
            <span class="contact-value">${escHtml(l.value)}</span>
            <span class="contact-arrow">›</span>
          </a>
          ${l.copyable ? `<button class="contact-copy-btn" onclick="copyToClipboard('${escHtml(l.value)}', '${escHtml(l.label)}')" title="Copy to clipboard">📋</button>` : ''}
        </div>
      `).join('')}
    </div>
    <div class="contact-footer">
      <div class="contact-footer-text">💡 Click any link to open, or use the copy button for quick access</div>
    </div>
  `;
}

function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Copied!', `${label} copied to clipboard`, 'success', 2000);
  }).catch(() => {
    showToast(`Failed to copy ${label}`, 2000);
  });
}

// ============================
// ===== UTILS ================
// ============================
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

// ============================
// ===== OS MENU BARS =========
// ============================
let osMenuListenersAttached = false;

function initOsMenus() {
  document.querySelectorAll('.js-os-menu').forEach((bar) => {
    if (bar.dataset.osBuilt) return;
    const win = bar.closest('.window');
    if (!win || !win.id) return;
    bar.innerHTML = renderOsMenuBarHtml(win.id);
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

function osMenuCloseDrop() { closeAllOsMenuDropdowns(); }

function renderOsMenuBarHtml(winId) {
  return `<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">File</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();fileMenuNew();">New<span class="menu-dd-shortcut">Ctrl+N</span></div>
    <div class="menu-dd-sep"></div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();closeWindow('${winId}');">Close</div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();shutdown();">Exit DevShell OS…</div>
  </div>
</div>
<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">Edit</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item disabled" role="menuitem">Undo<span class="menu-dd-shortcut">Ctrl+Z</span></div>
    <div class="menu-dd-item disabled" role="menuitem">Redo<span class="menu-dd-shortcut">Ctrl+Y</span></div>
    <div class="menu-dd-sep"></div>
    <div class="menu-dd-item disabled" role="menuitem">Cut<span class="menu-dd-shortcut">Ctrl+X</span></div>
    <div class="menu-dd-item disabled" role="menuitem">Copy<span class="menu-dd-shortcut">Ctrl+C</span></div>
    <div class="menu-dd-item disabled" role="menuitem">Paste<span class="menu-dd-shortcut">Ctrl+V</span></div>
  </div>
</div>
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
<div class="menu-pull-wrap">
  <button type="button" class="menu-pull">Help</button>
  <div class="menu-dropdown" role="menu">
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();showToast('Shortcuts: 1 About · 2 Projects · 3 Favourites · 4 Contact. Right-click desktop for menu. Type sudo for a surprise.', 5000);">Help Topics</div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();showToast('DevShell OS v1.0 — portfolio shell by Harshit Jadhav. Built with HTML, CSS, and JavaScript.', 4200);">About DevShell OS…</div>
    <div class="menu-dd-sep"></div>
    <div class="menu-dd-item" role="menuitem" onclick="osMenuCloseDrop();showToast('Tip: Double-click desktop icons to launch apps. Use the vinyl control to mute audio.', 4200);">Tip of the Day</div>
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
  if (x + 200 > dr.width) x = dr.width - 205;
  if (y + 220 > dr.height) y = dr.height - 225;
  m.style.left = x + 'px';
  m.style.top = y + 'px';
  m.style.display = 'block';
  requestAnimationFrame(() => m.classList.add('ctx-show'));
}
function hideCtxMenu() {
  const m = document.getElementById('context-menu');
  m.classList.remove('ctx-show');
  setTimeout(() => { m.style.display = 'none'; }, 150);
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

  const drops = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    len: Math.random() * 22 + 10,
    spd: Math.random() * 2.5 + 1,
    op: Math.random() * 0.18 + 0.04,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drops.forEach(d => {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - 0.8, d.y + d.len);
      ctx.strokeStyle = `rgba(0,255,136,${d.op})`;
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
// ===== EASTER EGG ===========
// ============================
function initEasterEgg() {
  let buf = '';
  document.addEventListener('keydown', e => {
    buf = (buf + e.key.toLowerCase()).slice(-4);
    if (buf === 'sudo') {
      buf = '';
      triggerTerminalFlash();
    }
  });
}
function triggerTerminalFlash() {
  const el = document.getElementById('terminal-flash');
  el.textContent = 'ACCESS GRANTED';
  el.classList.add('term-flash-active');
  showToast('> sudo: access granted. Welcome to the mainframe.', 3000);
  setTimeout(() => el.classList.remove('term-flash-active'), 2500);
}

// ============================
// ===== DESKTOP INIT =========
// ============================
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
    ) return;
    spawnClickRipple(desktop, e.clientX, e.clientY);
  });

  desktop.querySelectorAll('.window').forEach((win) => {
    win.addEventListener('mousedown', () => {
      if (!win.id || win.classList.contains('shutdown-window')) return;
      if (win.style.display !== 'none') setActiveWindow(win.id);
    });
  });

  document.addEventListener('keydown', desktopKeyShortcuts);
  initWindowScrolling();
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
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  if (e.code === 'Escape') {
    if (document.querySelector('.menu-pull-wrap.open')) {
      e.preventDefault();
      closeAllOsMenuDropdowns();
      return;
    }
  }

  const map = { Digit1: 'about', Digit2: 'projects', Digit3: 'hobbies', Digit4: 'contact' };
  const win = map[e.code];
  if (win) { e.preventDefault(); openWindow(win); }
}

// ============================
// ===== WINDOW SCROLLING =====
// ============================
/**
 * FIX: targets all scrollable containers inside windows, including
 * named inner views that receive dynamic content.
 */
function initWindowScrolling() {
  const selectors = [
    '.window-body',
    '.window-body-stack',
    '#about-view',
    '#hobbies-list-view',
    '#project-detail-view',
    '#projects-list-view',
    '#contact-display-view',
  ];
  document.querySelectorAll(selectors.join(', ')).forEach(attachWheelScroll);
}

/**
 * Attaches a wheel listener so scroll-wheel works inside each window.
 * Guard flag prevents double-attaching.
 */
function attachWheelScroll(el) {
  if (!el || el._wheelAttached) return;
  el._wheelAttached = true;
  el.addEventListener('wheel', (e) => {
    const canScrollDown = el.scrollTop + el.clientHeight < el.scrollHeight - 1;
    const canScrollUp = el.scrollTop > 0;
    if ((e.deltaY > 0 && canScrollDown) || (e.deltaY < 0 && canScrollUp)) {
      el.scrollTop += e.deltaY;
      e.preventDefault();
      e.stopPropagation();
    }
  }, { passive: false });
}

// ============================
// ===== SEARCH FUNCTIONALITY =
// ============================
let searchData = [];

function initSearch() {
  // Build search index
  searchData = [];
  
  // Add projects
  PORTFOLIO.projects.forEach(p => {
    searchData.push({
      type: 'Project',
      title: p.title,
      desc: p.desc,
      tags: p.tags,
      action: () => { openWindow('projects'); setTimeout(() => viewProject(p.id), 300); }
    });
  });
  
  // Add skills
  PORTFOLIO.skills.forEach(s => {
    searchData.push({
      type: 'Skill',
      title: s.name,
      desc: `${s.level}% proficiency`,
      action: () => openWindow('about')
    });
  });
  
  // Add contacts
  Object.entries(PORTFOLIO.contact).forEach(([key, value]) => {
    if (value) {
      searchData.push({
        type: 'Contact',
        title: key.charAt(0).toUpperCase() + key.slice(1),
        desc: value,
        action: () => openWindow('contact')
      });
    }
  });
  
  // Add hobbies
  Object.entries(PORTFOLIO.hobbies).forEach(([category, items]) => {
    items.forEach(item => {
      searchData.push({
        type: 'Hobby',
        title: item.name,
        desc: item.note,
        action: () => openWindow('hobbies')
      });
    });
  });
  
  const input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('input', performSearch);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
    });
  }
}

function openSearch() {
  const box = document.getElementById('search-box');
  const input = document.getElementById('search-input');
  box.style.display = 'block';
  requestAnimationFrame(() => {
    box.classList.add('search-show');
    if (input) {
      input.value = '';
      input.focus();
      performSearch();
    }
  });
}

function closeSearch() {
  const box = document.getElementById('search-box');
  box.classList.remove('search-show');
  setTimeout(() => { box.style.display = 'none'; }, 200);
}

function performSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const query = input.value.toLowerCase().trim();
  
  if (!query) {
    results.innerHTML = '<div class="search-no-results">Type to search across projects, skills, and more...</div>';
    return;
  }
  
  const matches = searchData.filter(item => {
    const searchText = `${item.title} ${item.desc} ${item.tags || ''}`.toLowerCase();
    return searchText.includes(query);
  }).slice(0, 10);
  
  if (matches.length === 0) {
    results.innerHTML = '<div class="search-no-results">No results found. Try different keywords.</div>';
    return;
  }
  
  results.innerHTML = matches.map(item => `
    <div class="search-result-item" onclick='${item.action.toString().replace(/'/g, "\\'")}(); closeSearch();'>
      <div class="search-result-type">${escHtml(item.type)}</div>
      <div class="search-result-title">${escHtml(item.title)}</div>
      <div>${escHtml(item.desc.substring(0, 80))}${item.desc.length > 80 ? '...' : ''}</div>
    </div>
  `).join('');
}

// ============================
// ===== PERFORMANCE MONITOR ==
// ============================
let perfMonitorActive = false;
let perfStartTime = Date.now();
let perfFrameCount = 0;
let perfLastTime = Date.now();

function togglePerfMonitor() {
  perfMonitorActive = !perfMonitorActive;
  const monitor = document.getElementById('perf-monitor');
  if (perfMonitorActive) {
    monitor.classList.add('perf-show');
    updatePerfMonitor();
    showNotification('Performance Monitor', 'System monitoring enabled', 'success');
  } else {
    monitor.classList.remove('perf-show');
    showNotification('Performance Monitor', 'System monitoring disabled', 'success');
  }
}

function updatePerfMonitor() {
  if (!perfMonitorActive) return;
  
  // FPS calculation
  perfFrameCount++;
  const now = Date.now();
  if (now - perfLastTime >= 1000) {
    const fps = Math.round(perfFrameCount * 1000 / (now - perfLastTime));
    document.getElementById('perf-fps').textContent = fps;
    perfFrameCount = 0;
    perfLastTime = now;
  }
  
  // Memory (if available)
  if (performance.memory) {
    const used = (performance.memory.usedJSHeapSize / 1048576).toFixed(1);
    document.getElementById('perf-mem').textContent = `${used} MB`;
  } else {
    document.getElementById('perf-mem').textContent = 'N/A';
  }
  
  // Uptime
  const uptime = Math.floor((now - perfStartTime) / 1000);
  const mins = Math.floor(uptime / 60);
  const secs = uptime % 60;
  document.getElementById('perf-uptime').textContent = 
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  // Window count
  const windowCount = document.querySelectorAll('.window[style*="display: flex"]').length;
  document.getElementById('perf-windows').textContent = windowCount;
  
  requestAnimationFrame(updatePerfMonitor);
}

// ============================
// ===== NOTIFICATION SYSTEM ==
// ============================
let notificationId = 0;

function showNotification(title, message, type = 'info', duration = 4000) {
  const stack = document.getElementById('notification-stack');
  const id = `notif-${notificationId++}`;
  
  const notif = document.createElement('div');
  notif.className = `notification notification-${type}`;
  notif.id = id;
  notif.innerHTML = `
    <button class="notification-close" onclick="closeNotification('${id}')">✕</button>
    <div class="notification-title">${escHtml(title)}</div>
    <div>${escHtml(message)}</div>
  `;
  
  stack.appendChild(notif);
  
  if (duration > 0) {
    setTimeout(() => closeNotification(id), duration);
  }
}

function closeNotification(id) {
  const notif = document.getElementById(id);
  if (notif) {
    notif.style.opacity = '0';
    notif.style.transform = 'translateX(100px)';
    setTimeout(() => notif.remove(), 300);
  }
}

// ============================
// ===== THEME TOGGLE =========
// ============================
let currentTheme = 'default';

function toggleTheme() {
  const themes = ['default', 'blue', 'purple', 'amber'];
  const currentIndex = themes.indexOf(currentTheme);
  currentTheme = themes[(currentIndex + 1) % themes.length];
  
  const root = document.documentElement;
  
  switch(currentTheme) {
    case 'blue':
      root.style.setProperty('--bat-gold', '#00d4ff');
      root.style.setProperty('--bat-gold-dim', '#0088cc');
      showNotification('Theme Changed', 'Switched to Cyan theme', 'success', 2000);
      break;
    case 'purple':
      root.style.setProperty('--bat-gold', '#cc88ff');
      root.style.setProperty('--bat-gold-dim', '#8844cc');
      showNotification('Theme Changed', 'Switched to Purple theme', 'success', 2000);
      break;
    case 'amber':
      root.style.setProperty('--bat-gold', '#ffaa00');
      root.style.setProperty('--bat-gold-dim', '#cc8800');
      showNotification('Theme Changed', 'Switched to Amber theme', 'success', 2000);
      break;
    default:
      root.style.setProperty('--bat-gold', '#00ff88');
      root.style.setProperty('--bat-gold-dim', '#00b35c');
      showNotification('Theme Changed', 'Switched to Default theme', 'success', 2000);
  }
}

// ============================
// ===== WINDOW SNAPPING ======
// ============================
let snapEnabled = true;
let isDraggingForSnap = false;
let snapIndicator = null;

function initWindowSnapping() {
  snapIndicator = document.getElementById('snap-indicator');
  
  // Override the existing drag functions to add snapping
  const originalStartDrag = window.startDrag;
  window.startDrag = function(e, id) {
    isDraggingForSnap = true;
    originalStartDrag(e, id);
  };
  
  const originalStopDrag = window.stopDrag;
  window.stopDrag = function() {
    if (isDraggingForSnap && snapEnabled && dragData) {
      applyWindowSnap(dragData.win);
    }
    isDraggingForSnap = false;
    hideSnapIndicator();
    originalStopDrag();
  };
  
  const originalDoDrag = window.doDrag;
  window.doDrag = function(e) {
    originalDoDrag(e);
    if (isDraggingForSnap && snapEnabled && dragData) {
      updateSnapIndicator(e);
    }
  };
}

function updateSnapIndicator(e) {
  const snapZone = 50;
  const vw = window.innerWidth;
  const vh = window.innerHeight - 40; // minus taskbar
  
  let snapType = null;
  
  if (e.clientX < snapZone) {
    snapType = 'left';
  } else if (e.clientX > vw - snapZone) {
    snapType = 'right';
  } else if (e.clientY < snapZone) {
    snapType = 'top';
  }
  
  if (snapType) {
    showSnapIndicator(snapType, vw, vh);
  } else {
    hideSnapIndicator();
  }
}

function showSnapIndicator(type, vw, vh) {
  if (!snapIndicator) return;
  
  snapIndicator.classList.add('snap-show');
  
  switch(type) {
    case 'left':
      snapIndicator.style.left = '0';
      snapIndicator.style.top = '0';
      snapIndicator.style.width = (vw / 2) + 'px';
      snapIndicator.style.height = vh + 'px';
      break;
    case 'right':
      snapIndicator.style.left = (vw / 2) + 'px';
      snapIndicator.style.top = '0';
      snapIndicator.style.width = (vw / 2) + 'px';
      snapIndicator.style.height = vh + 'px';
      break;
    case 'top':
      snapIndicator.style.left = '0';
      snapIndicator.style.top = '0';
      snapIndicator.style.width = vw + 'px';
      snapIndicator.style.height = vh + 'px';
      break;
  }
}

function hideSnapIndicator() {
  if (snapIndicator) {
    snapIndicator.classList.remove('snap-show');
  }
}

function applyWindowSnap(win) {
  if (!win || !snapIndicator || !snapIndicator.classList.contains('snap-show')) return;
  
  const vw = window.innerWidth;
  const vh = window.innerHeight - 40;
  const left = parseInt(snapIndicator.style.left);
  const width = parseInt(snapIndicator.style.width);
  
  if (width === vw) {
    // Maximize
    maximizeWindow(win.id);
  } else if (left === 0) {
    // Snap left
    win.style.left = '0';
    win.style.top = '0';
    win.style.width = (vw / 2) + 'px';
    win.style.height = vh + 'px';
  } else {
    // Snap right
    win.style.left = (vw / 2) + 'px';
    win.style.top = '0';
    win.style.width = (vw / 2) + 'px';
    win.style.height = vh + 'px';
  }
}

// ============================
// ===== ENHANCED SHORTCUTS ===
// ============================
function initEnhancedShortcuts() {
  document.addEventListener('keydown', (e) => {
    const desktop = document.getElementById('desktop');
    if (!desktop || desktop.style.display === 'none') return;
    
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
      return;
    }
    
    // Ctrl/Cmd + M for performance monitor
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
      e.preventDefault();
      togglePerfMonitor();
      return;
    }
    
    // Ctrl/Cmd + T for theme toggle
    if ((e.ctrlKey || e.metaKey) && e.key === 't') {
      e.preventDefault();
      toggleTheme();
      return;
    }
    
    // Ctrl/Cmd + W to close active window
    if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
      e.preventDefault();
      const activeWin = document.querySelector('.window.window-active');
      if (activeWin && activeWin.id) {
        closeWindow(activeWin.id);
      }
      return;
    }
  });
}

// ============================
// ===== INIT ALL FEATURES ====
// ============================
function initAllEnhancements() {
  initSearch();
  initWindowSnapping();
  initEnhancedShortcuts();
  initDesktopDragSelect();
  initWindowShake();
  initDoubleClickDetection();
  
  // Show welcome notification
  setTimeout(() => {
    showNotification(
      'Welcome to DevShell OS',
      'Explore my portfolio with an interactive retro desktop experience!',
      'success',
      6000
    );
  }, 2000);
}

// ============================
<<<<<<< HEAD
=======
// ===== FLOATING ACTION MENU =
// ============================
let floatingMenuOpen = false;

function initFloatingMenu() {
  const menu = document.getElementById('floating-menu');
  if (menu) {
    menu.classList.add('fab-show');
  }
}

function toggleFloatingMenu() {
  floatingMenuOpen = !floatingMenuOpen;
  const fabMain = document.querySelector('.fab-main');
  if (fabMain) {
    if (floatingMenuOpen) {
      fabMain.classList.add('fab-active');
    } else {
      fabMain.classList.remove('fab-active');
    }
  }
}

// Close floating menu when clicking outside
document.addEventListener('click', (e) => {
  if (floatingMenuOpen && !e.target.closest('#floating-menu')) {
    toggleFloatingMenu();
  }
});

// ============================
>>>>>>> 40907d532c31212a94259516ea026413d1536c37
// ===== DESKTOP DRAG SELECT ==
// ============================
let isDragSelecting = false;
let dragSelectStart = { x: 0, y: 0 };
let selectionBox = null;

function initDesktopDragSelect() {
  const desktop = document.getElementById('desktop');
  if (!desktop) return;
  
  desktop.addEventListener('mousedown', (e) => {
    if (e.target === desktop || e.target.id === 'rain-canvas') {
      isDragSelecting = true;
      dragSelectStart = { x: e.clientX, y: e.clientY };
      
      selectionBox = document.createElement('div');
      selectionBox.className = 'desktop-selection-box';
      selectionBox.style.left = e.clientX + 'px';
      selectionBox.style.top = e.clientY + 'px';
      desktop.appendChild(selectionBox);
    }
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragSelecting && selectionBox) {
      const width = Math.abs(e.clientX - dragSelectStart.x);
      const height = Math.abs(e.clientY - dragSelectStart.y);
      const left = Math.min(e.clientX, dragSelectStart.x);
      const top = Math.min(e.clientY, dragSelectStart.y);
      
      selectionBox.style.width = width + 'px';
      selectionBox.style.height = height + 'px';
      selectionBox.style.left = left + 'px';
      selectionBox.style.top = top + 'px';
      
      // Check icon intersections
      const icons = document.querySelectorAll('.desktop-icon');
      const boxRect = selectionBox.getBoundingClientRect();
      
      icons.forEach(icon => {
        const iconRect = icon.getBoundingClientRect();
        const intersects = !(
          boxRect.right < iconRect.left ||
          boxRect.left > iconRect.right ||
          boxRect.bottom < iconRect.top ||
          boxRect.top > iconRect.bottom
        );
        
        if (intersects) {
          icon.classList.add('selected');
        } else {
          icon.classList.remove('selected');
        }
      });
    }
  });
  
  document.addEventListener('mouseup', () => {
    if (isDragSelecting) {
      isDragSelecting = false;
      if (selectionBox) {
        selectionBox.remove();
        selectionBox = null;
      }
    }
  });
}

// ============================
// ===== WINDOW SHAKE =========
// ============================
function initWindowShake() {
  // Shake window when trying to close with unsaved changes (demo)
  const originalCloseWindow = window.closeWindow;
  window.closeWindow = function(id) {
    const win = document.getElementById(id);
    if (win && Math.random() < 0.1) { // 10% chance for demo
      win.classList.add('window-shake');
      setTimeout(() => win.classList.remove('window-shake'), 500);
      showNotification('Wait!', 'Are you sure? (Just kidding, closing...)', 'warning', 2000);
      setTimeout(() => originalCloseWindow(id), 600);
    } else {
      originalCloseWindow(id);
    }
  };
}

// ============================
// ===== DOUBLE CLICK DETECT ==
// ============================
let clickTimeout = null;
let clickCount = 0;

function initDoubleClickDetection() {
  document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
      clickCount++;
      
      if (clickCount === 1) {
        clickTimeout = setTimeout(() => {
          clickCount = 0;
        }, 300);
      } else if (clickCount === 2) {
        clearTimeout(clickTimeout);
        clickCount = 0;
        this.classList.add('double-click-effect');
        setTimeout(() => this.classList.remove('double-click-effect'), 300);
      }
    });
  });
}

// ============================
// ===== WINDOW MINIMIZE ANIM =
// ============================
const originalMinimizeWindow = window.minimizeWindow;
window.minimizeWindow = function(id) {
  const win = document.getElementById(id);
  if (win) {
    win.classList.add('minimizing');
    setTimeout(() => {
      win.classList.remove('minimizing');
      originalMinimizeWindow(id);
    }, 300);
  }
};

// ============================
// ===== TASKBAR BOUNCE =======
// ============================
function bounceTaskbarButton(id) {
  const btn = document.getElementById('tbtn-' + id);
  if (btn) {
    btn.classList.add('bounce');
    setTimeout(() => btn.classList.remove('bounce'), 500);
  }
}

// Bounce when window gets focus
const originalSetActiveWindow = window.setActiveWindow;
window.setActiveWindow = function(id) {
  originalSetActiveWindow(id);
  bounceTaskbarButton(id);
};

// ============================
// ===== PARTICLE BURST =======
// ============================
function createParticleBurst(x, y, count = 12) {
  const desktop = document.getElementById('desktop');
  if (!desktop) return;
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const angle = (Math.PI * 2 * i) / count;
    const velocity = 50 + Math.random() * 50;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;
    
    particle.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: 4px;
      height: 4px;
      background: var(--bat-gold);
      --tx: ${tx}px;
      --ty: ${ty}px;
    `;
    
    desktop.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
  }
}

// Trigger particle burst on window open
const originalOpenWindow = window.openWindow;
window.openWindow = function(name) {
  originalOpenWindow(name);
  const win = document.getElementById(`win-${name}`);
  if (win) {
    const rect = win.getBoundingClientRect();
    createParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }
};

// ============================
// ===== ENHANCED TOOLTIPS ====
// ============================
function initTooltips() {
  document.querySelectorAll('[title]').forEach(el => {
    const title = el.getAttribute('title');
    if (title) {
      el.setAttribute('data-tooltip', title);
      el.removeAttribute('title');
    }
  });
}

// ============================
// ===== WINDOW LOADING STATE =
// ============================
function showWindowLoading(id, duration = 1000) {
  const win = document.getElementById(id);
  if (win) {
    win.classList.add('window-loading');
    setTimeout(() => win.classList.remove('window-loading'), duration);
  }
}

// ============================
// ===== KONAMI CODE EASTER EGG
// ============================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function initKonamiCode() {
  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
      triggerKonamiEasterEgg();
      konamiCode = [];
    }
  });
}

function triggerKonamiEasterEgg() {
  showNotification(
    '🎮 KONAMI CODE ACTIVATED!',
    'You found the secret! Extra life granted... just kidding!',
    'success',
    5000
  );
  
  // Make all windows dance
  document.querySelectorAll('.window').forEach((win, i) => {
    setTimeout(() => {
      win.classList.add('window-shake');
      setTimeout(() => win.classList.remove('window-shake'), 500);
    }, i * 100);
  });
  
  // Change theme rapidly
  let themeCount = 0;
  const themeInterval = setInterval(() => {
    toggleTheme();
    themeCount++;
    if (themeCount >= 8) {
      clearInterval(themeInterval);
    }
  }, 200);
}

// Initialize Konami code on desktop load
setTimeout(initKonamiCode, 1000);

// ============================
// ===== COMPANION CHARACTER ==
// ============================
const companionMessages = [
  "Hey there! 👋 I'm your DevShell companion!",
  "Did you know? Press <span class='companion-speech-highlight'>Ctrl+K</span> to search!",
  "Try pressing <span class='companion-speech-highlight'>1, 2, 3, or 4</span> to open windows quickly!",
  "Right-click the desktop for a quick menu! 🖱️",
  "Harshit built this entire portfolio from scratch! 💻",
  "The music disc in the corner controls audio 🎵",
  "Drag windows around and snap them to edges! ✨",
  "Check out the Projects section for cool stuff! 🚀",
  "Type <span class='companion-speech-highlight'>sudo</span> for a secret... 🤫",
  "Hover over skills to see them glow! ⚡",
  "The floating menu has quick shortcuts! 📱",
  "Try the theme toggle in the system tray! 🎨",
  "Double-click desktop icons to open them! 🖱️",
  "Press <span class='companion-speech-highlight'>Esc</span> to close menus!",
  "This portfolio is fully responsive! 📱💻",
  "Harshit loves AI, robotics, and electronics! 🤖",
  "All windows are draggable and resizable! 🪟",
  "The Konami code works here... ↑↑↓↓←→←→BA",
  "Filter projects by category! 🔍",
  "Copy contact info with one click! 📋",
  "I blink every 4 seconds! Did you notice? 👀",
  "Feeling lost? Just click me anytime! 😊",
  "The rain effect is pure CSS magic! 🌧️",
  "Windows have smooth animations! Watch closely! ✨",
  "This OS runs entirely in your browser! 🌐"
];

let lastCompanionMessage = -1;
let companionSpeechTimeout = null;

function interactWithCompanion() {
  const speech = document.getElementById('companion-speech');
  const companion = document.getElementById('companion');
  
  // Clear any existing timeout
  if (companionSpeechTimeout) {
    clearTimeout(companionSpeechTimeout);
  }
  
  // If already showing, hide it
  if (speech.classList.contains('show')) {
    speech.classList.remove('show');
    return;
  }
  
  // Get a random message different from the last one
  let messageIndex;
  do {
    messageIndex = Math.floor(Math.random() * companionMessages.length);
  } while (messageIndex === lastCompanionMessage && companionMessages.length > 1);
  
  lastCompanionMessage = messageIndex;
  
  // Show the message
  speech.innerHTML = companionMessages[messageIndex];
  speech.classList.add('show');
  
  // Add bounce animation to companion
  companion.style.animation = 'none';
  setTimeout(() => {
    companion.style.animation = '';
  }, 10);
  
  // Hide after 5 seconds
  companionSpeechTimeout = setTimeout(() => {
    speech.classList.remove('show');
  }, 5000);
}

// Auto-greet on first load
setTimeout(() => {
  interactWithCompanion();
}, 3000);