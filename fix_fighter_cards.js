const fs = require('fs');
const cssFile = 'src/premium-theme.css';

let css = fs.readFileSync(cssFile, 'utf8');

const fixCSS = `

/* =========================================================================
   FIGHTER CARD MOBILE OVERFLOW FIX
   Ensures text properly wraps inside small grids and doesn't push elements out
========================================================================= */
.mma-fighter-topline {
  align-items: flex-start !important;
}

.mma-fighter-topline > div {
  min-width: 0 !important;
  flex: 1 1 auto !important;
  padding-right: 8px; /* space before the country badge */
}

.mma-fighter-topline h3,
.mma-fighter-kicker,
.mma-fighter-nickname {
  white-space: normal !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
}

/* Ensure the country badge shrinks slightly if completely out of space */
.mma-fighter-country {
  flex-shrink: 1 !important;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
`;
fs.writeFileSync(cssFile, css + fixCSS);
console.log('Fighter card overflow fix applied.');
