# Companion Character Feature

## Overview
A friendly, interactive companion character that provides helpful tips and adds personality to the DevShell OS portfolio.

## Features

### Visual Design
- **Circular orb** with glowing border
- **Animated face** with blinking eyes (• •) and smiling mouth (‿)
- **Floating animation** - gently bobs up and down
- **Shine effect** - rotating gradient overlay
- **Hover effect** - scales up and lifts slightly
- **Glow** - Green/cyan glow matching the theme

### Interactions
- **Click to talk** - Shows a speech bubble with helpful tips
- **25+ messages** including:
  - Keyboard shortcuts (Ctrl+K, 1-4 keys, Esc)
  - Hidden features (Konami code, sudo command)
  - Navigation tips (right-click menu, drag windows)
  - Portfolio highlights (projects, skills, contact)
  - Fun facts about the site

### Behavior
- **Auto-greet** - Appears 3 seconds after page load with first message
- **Random messages** - Never repeats the same message twice in a row
- **Auto-hide** - Speech bubble disappears after 5 seconds
- **Toggle** - Click again to hide the speech bubble early
- **Blink animation** - Eyes blink every 4 seconds

## Technical Details

### HTML Structure
```html
<div id="companion" onclick="interactWithCompanion()">
  <div class="companion-body">
    <div class="companion-face">
      <div class="companion-eyes">
        <span class="companion-eye">•</span>
        <span class="companion-eye">•</span>
      </div>
      <div class="companion-mouth">‿</div>
    </div>
  </div>
  <div class="companion-speech" id="companion-speech"></div>
</div>
```

### CSS Animations
1. **companionFloat** - 3s ease-in-out infinite (vertical bob)
2. **companionShine** - 4s linear infinite (rotating gradient)
3. **companionBlink** - 4s infinite (eye blink effect)

### JavaScript Functions
- `interactWithCompanion()` - Main interaction handler
- `companionMessages[]` - Array of 25+ tip messages
- Auto-greet timeout on page load

## Positioning

### Desktop
- **Position**: `bottom: 60px; left: 20px;`
- **Size**: `60px × 60px`
- **Z-index**: `9050`

### Mobile (≤768px)
- **Position**: `bottom: 120px; left: 16px;`
- **Size**: `50px × 50px`
- **Speech bubble**: Max-width adapts to screen

### Small Mobile (≤480px)
- **Position**: `bottom: 110px`
- **Size**: `45px × 45px`
- **Smaller text and tighter spacing**

## Message Categories

### Shortcuts & Controls
- Ctrl+K for search
- Number keys (1-4) for quick window access
- Esc to close menus
- Right-click desktop menu

### Hidden Features
- Konami code (↑↑↓↓←→←→BA)
- "sudo" easter egg
- Theme toggle in system tray

### Portfolio Highlights
- Project filtering
- Skill hover effects
- Contact copy-to-clipboard
- Window dragging and snapping

### Fun Facts
- Fully responsive design
- Browser-based OS
- CSS rain effect
- Harshit's interests (AI, robotics, electronics)

## Customization

### Adding New Messages
Edit the `companionMessages` array in `js/app.js`:
```javascript
const companionMessages = [
  "Your new message here!",
  "Use <span class='companion-speech-highlight'>highlighted</span> text for emphasis",
  // ... more messages
];
```

### Changing Appearance
Modify CSS variables in `css/style.css`:
- Border color: `border: 2px solid var(--bat-gold);`
- Glow color: `box-shadow: 0 0 20px rgba(0,255,136,0.3);`
- Face colors: `.companion-eye` and `.companion-mouth` color properties

### Adjusting Timing
- **Float speed**: Change `3s` in `companionFloat` animation
- **Blink rate**: Change `4s` in `companionBlink` animation
- **Message duration**: Change `5000` (5 seconds) in setTimeout
- **Auto-greet delay**: Change `3000` (3 seconds) in initial setTimeout

## Browser Compatibility
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Accessibility
- Clickable with keyboard (focusable)
- Clear visual feedback on hover
- Readable text with good contrast
- Non-intrusive (auto-hides)

## Performance
- Pure CSS animations (GPU accelerated)
- Minimal JavaScript (only on click)
- No external dependencies
- Lightweight (~2KB total)

## Future Enhancements (Optional)
- [ ] Different moods/expressions
- [ ] Context-aware messages (based on current window)
- [ ] Voice synthesis for messages
- [ ] Customizable personality
- [ ] Achievement system
- [ ] Multiple companion skins
