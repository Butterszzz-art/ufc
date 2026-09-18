const fs = require('fs');
const cssFile = 'src/premium-theme.css';

let css = fs.readFileSync(cssFile, 'utf8');

const fixCSS = `

/* =========================================================================
   RANKINGS ACCORDION FIX
   Ensures the sidebar weight classes are foldable on mobile devices
========================================================================= */
@media (max-width: 1100px) {
  .rankings-rtl-scroll .mobile-accordion-toggle {
    display: flex !important;
  }
  
  .rankings-rtl-scroll .mobile-accordion-content {
    display: block !important;
    max-height: 0 !important;
    overflow: hidden !important;
    transition: max-height 0.3s ease-out !important;
    visibility: hidden;
  }
  
  .rankings-rtl-scroll .mobile-accordion-content.open {
    max-height: 2000px !important;
    visibility: visible;
  }
}
`;

fs.writeFileSync(cssFile, css + fixCSS);
console.log('Accordion fix applied.');
