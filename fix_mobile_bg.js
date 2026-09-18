const fs = require('fs');
const cssFile = 'src/premium-theme.css';

let css = fs.readFileSync(cssFile, 'utf8');

const fixCSS = `

/* =========================================================================
   MOBILE HOME PAGE BACKGROUND FIX
   Ensure the UFC background image shows ONLY on the home page on mobile
========================================================================= */
@media (max-width: 768px) {
  .home-page-container {
    /* Set the background image for home page mobile, with a strong dark overlay */
    background: 
      linear-gradient(to bottom, rgba(10, 10, 10, 0.2), rgba(5, 5, 5, 0.8)),
      url('../assets/FrontPage.png') center/contain fixed no-repeat !important;
  }
}
`;

fs.writeFileSync(cssFile, css + fixCSS);
console.log('Mobile background fix applied.');
