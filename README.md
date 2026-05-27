# 🚀 DevShell OS — Interactive Retro Portfolio

A fully functional, interactive retro-themed desktop operating system portfolio built with HTML, CSS, and vanilla JavaScript. Features a complete window management system, advanced UI interactions, and a hacker-inspired aesthetic.

## 🌐 Live Demo

View the live website here: **[harshooit.github.io](https://harshooit.github.io/)**

---

## ✨ Features

### Core Functionality
- **Boot Sequence**: Authentic OS boot animation with loading messages
- **Window Management**: Draggable, resizable, minimizable, and maximizable windows
- **Desktop Icons**: Double-click to launch, single-click to select with animations
- **Taskbar**: Active window tracking, clock with date, and quick access buttons
- **Start Menu**: Quick navigation to all portfolio sections
- **Context Menu**: Right-click desktop for quick actions

### Advanced Features
- **🔍 Quick Search** (Ctrl+K): Search across projects, skills, contacts, and hobbies
- **⚡ Performance Monitor** (Ctrl+M): Real-time FPS, memory usage, uptime, and window count
- **🎨 Theme Toggle** (Ctrl+T): Switch between 4 color themes (Default Green, Cyan, Purple, Amber)
- **📌 Window Snapping**: Drag windows to screen edges to snap them (left half, right half, or maximize)
- **🔔 Notification System**: Beautiful toast notifications with multiple types
- **🎵 Background Music**: Toggle-able ambient music with vinyl disc indicator
- **🌧️ Rain Effect**: Animated matrix-style rain overlay
- **✨ Easter Egg**: Type "sudo" anywhere for a surprise

### Enhanced Scrollbars
- Custom-styled scrollbars with up/down arrow buttons
- Smooth hover and active states with color transitions
- Gradient thumb with glow effects
- Fully functional in all scrollable areas (windows, menus, lists)

### Keyboard Shortcuts
- **1-4**: Quick open windows (About, Projects, Favourites, Contact)
- **Ctrl+K**: Open search
- **Ctrl+M**: Toggle performance monitor
- **Ctrl+T**: Cycle through themes
- **Ctrl+W**: Close active window
- **Esc**: Close menus and dialogs
- **F5**: Refresh window content
- **Konami Code**: ↑↑↓↓←→←→BA for a surprise!

### Portfolio Sections

#### 🧬 About Me
- Dynamic age calculator (years, months, days)
- Professional summary and headline
- Tech stack with animated skill bars
- Resume download button
- "Open to Work" status badge

#### 💻 Projects
- Grid layout with hover effects
- Detailed project view with descriptions, tags, videos, and links
- Smooth navigation between list and detail views

#### ⭐ Favourites
- Categorized hobbies (Games, Movies, Series, Music)
- External links to Steam, IMDB, Spotify
- Animated reveals and hover effects

#### 📡 Contact
- Multiple contact methods (Email, LinkedIn, GitHub, Instagram, Discord)
- Animated contact cards with hover effects

---

## 🎮 Usage

### Basic Navigation
1. Click the **Power On** button to boot the system
2. Double-click desktop icons to open windows
3. Use the Start menu for quick access
4. Right-click desktop for context menu
5. Drag windows by title bar, resize from bottom-right corner

### Advanced Usage
- **Search**: Press Ctrl+K and type to search everything
- **Monitor**: Press Ctrl+M to see system performance stats
- **Themes**: Press Ctrl+T or click tray icon to cycle through color themes
- **Snap Windows**: Drag to screen edges to snap (left/right half or maximize)
- **Music Control**: Click the vinyl disc to mute/unmute background music
- **Quick Actions**: Click the floating + button (bottom-right) for quick access
- **Drag Select**: Click and drag on desktop to select multiple icons
- **System Tray**: Use taskbar tray icons for quick access to tools

---

## 🛠️ Built With

* **HTML5** – Semantic markup and structure
* **CSS3** – Custom styling, animations, and responsive design
* **JavaScript (ES6+)** – Interactive features and window management
* **No frameworks or libraries** – Pure vanilla code

---

## 📂 Repository Structure

```
retro-desktop/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # All styles and animations
├── js/
│   └── app.js          # All JavaScript functionality
├── media/
│   ├── wallpaper.mp4   # Background video
│   ├── bg_music.mp3    # Background music
│   ├── cursor.png      # Custom cursor
│   └── photo.jpeg      # Profile photo
└── README.md           # This file
```

---

## 🔧 Customization

### Updating Portfolio Data
Edit the `PORTFOLIO` object in `js/app.js`:

```javascript
const PORTFOLIO = {
  about: {
    name: 'Your Name',
    birthDate: 'YYYY-MM-DD',
    // ... more fields
  },
  skills: [
    { name: 'Skill Name', level: 85, icon: '🔥' },
  ],
  projects: [
    {
      id: 1,
      title: 'Project Name',
      emoji: '🚀',
      desc: 'Description',
      tags: 'Tech, Stack',
      url: 'https://...',
    },
  ],
  // ... hobbies and contact
};
```

### Changing Colors
Modify CSS variables in `css/style.css`:

```css
:root {
  --bat-gold: #00ff88;     /* Primary accent color */
  --bat-gold-dim: #00b35c; /* Dimmed accent */
  --bat-text: #b8d4c8;     /* Main text color */
}
```

---

## 🔧 Local Setup & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshooit/harshooit.github.io.git
   ```

2. **Open in browser:**
   ```bash
   cd harshooit.github.io
   # Open index.html in your browser
   ```

3. **No build process required!** Just edit and refresh.

---

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

---

## 📱 Mobile Support

Fully responsive with touch-friendly controls:
- Touch to select icons
- Swipe to scroll windows
- Tap to open menus
- Optimized layouts for small screens

---

## ⚡ Performance

- 60 FPS animations
- Hardware-accelerated transforms
- Efficient event handling
- Optimized scrolling
- Lazy-loaded content

---

## 🎨 Design Philosophy

- **Retro Aesthetic**: Inspired by 90s hacker terminals and classic OS interfaces
- **Functional Beauty**: Every animation serves a purpose
- **User Delight**: Micro-interactions and easter eggs throughout
- **Professional**: Polished enough for a portfolio, fun enough to explore

---

## 📝 License

Free to use and modify for personal portfolios. Please credit the original design.

---

## 🙏 Credits

**Design & Development**: Harshit Prabhakar Jadhav  
**Fonts**: Google Fonts (VT323, Share Tech Mono, Orbitron)  
**Inspiration**: Classic operating systems, hacker terminals, retro computing

---

## 🚀 Future Enhancements

Potential additions:
- File system browser
- Terminal emulator
- More themes and customization
- Save/load preferences
- More easter eggs

---

**DevShell OS v1.0** — Where code meets creativity. Built with ❤️ and lots of ☕

For questions or suggestions, reach out through the Contact window!
