const fs = require('fs');
const cssFile = 'src/premium-theme.css';

let css = fs.readFileSync(cssFile, 'utf8');

const mobileFixes = `

/* =========================================================================
   ROBUST MOBILE RESPONSIVENESS OVERRIDES
   Ensures zero horizontal scrolling and proper scaling on all devices
========================================================================= */

/* Prevent horizontal overflow completely */
html, body {
  overflow-x: hidden !important;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* Fluid Typography for Hero Title */
.hero-title {
  font-size: clamp(2.5rem, 8vw, 6.5rem) !important;
  line-height: 1.1;
  word-wrap: break-word;
}

/* Ensure images don't overflow */
img {
  max-width: 100%;
  height: auto;
}

/* Safe grid wrapping for small devices (e.g. iPhone SE - 320px) */
.event-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)) !important;
}

.fans-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)) !important;
}

.mma-fighters-grid {
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 150px), 1fr)) !important;
  gap: 12px !important;
}

/* Rankings table scroll wrapper */
.rankings-rtl-scroll {
  width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;
}

.rankings-table {
  min-width: 600px; /* Ensure table keeps its layout, letting wrapper scroll */
}

/* Ensure modals don't overflow the screen */
.fighter-profile-modal {
  width: 95% !important;
  max-width: 800px !important;
  max-height: 95vh !important;
  margin: auto;
}

/* Mobile Navigation Dropdown */
.mobile-nav-dropdown {
  position: absolute !important;
  top: 70px !important;
  left: 0 !important;
  width: 100% !important;
  background: #111 !important;
  display: flex;
  flex-direction: column;
  padding: 20px !important;
  box-shadow: 0 10px 20px rgba(0,0,0,0.8);
  z-index: 1000;
  border-top: 1px solid #333;
}

.mobile-nav-dropdown a {
  padding: 15px 0 !important;
  font-size: 1.2rem !important;
  text-align: center;
  border-bottom: 1px solid #222;
  width: 100%;
}

.mobile-nav-dropdown a:last-child {
  border-bottom: none;
}

/* Small screen tweaks */
@media (max-width: 480px) {
  .hero-pro {
    padding: 10px !important;
  }
  
  .fighter-profile-info-col h2 {
    font-size: 1.8rem !important;
  }
  
  .fighter-stats-grid {
    grid-template-columns: 1fr !important; /* Stack stats on very small screens */
    gap: 8px !important;
  }
  
  .topbar-modern {
    padding: 10px 15px !important;
  }
  
  .brand-logo {
    font-size: 1.2rem !important;
  }
}
`;

if (!css.includes('ROBUST MOBILE RESPONSIVENESS OVERRIDES')) {
  fs.writeFileSync(cssFile, css + mobileFixes);
  console.log('Mobile fixes applied.');
} else {
  console.log('Mobile fixes already exist.');
}
