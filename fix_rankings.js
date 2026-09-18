const fs = require('fs');
const cssFile = 'src/premium-theme.css';

let css = fs.readFileSync(cssFile, 'utf8');

const fixCSS = `

/* =========================================================================
   RANKINGS TABLE OVERFLOW FIX
   Forces the table to scroll independently without breaking the page width
========================================================================= */

/* 1. Stop the outer wrappers from expanding to fit the 600px table */
.rankings-rtl-scroll {
  overflow-x: hidden !important; 
  width: 100% !important;
  max-width: 100vw !important;
}

.rankings-layout-pro {
  min-width: 0 !important;
  max-width: 100% !important;
  width: 100% !important;
}

/* 2. Force the section containing the table to strictly obey 100% width */
.rankings-layout-pro > section {
  min-width: 0 !important;
  max-width: 100% !important;
  width: 100% !important;
  overflow: hidden !important; /* Essential to prevent grid blowout */
}

/* 3. Make sure the custom scroll container takes exactly 100% of the section */
.custom-horizontal-scroll {
  width: 100% !important;
  max-width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
  padding-bottom: 15px !important; /* More space for easy thumb scrolling */
}

/* 4. Keep the table wide so it creates the horizontal scroll */
.rankings-table {
  min-width: 600px !important;
  width: 100% !important;
  table-layout: auto !important;
}

/* 5. Improve table cell readability on mobile */
@media (max-width: 600px) {
  .rankings-table th, .rankings-table td {
    padding: 12px 8px !important;
    font-size: 0.85rem !important;
    white-space: nowrap !important;
  }
}
`;

fs.writeFileSync(cssFile, css + fixCSS);
console.log('Rankings overflow fix applied.');
