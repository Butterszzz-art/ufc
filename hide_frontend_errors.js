const fs = require('fs');
const file = 'src/app.supabase.js';

let code = fs.readFileSync(file, 'utf8');

code = code.replace(/"Supabase is not configured\."/g, '"Service unavailable."');

fs.writeFileSync(file, code);
console.log("Frontend configured errors hidden");
