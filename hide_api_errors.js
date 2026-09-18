const fs = require('fs');
const file = 'server.supabase.js';

let code = fs.readFileSync(file, 'utf8');

code = code.replace(/"SportsData\.io MMA API key is not configured\."/g, '"Service unavailable."');
code = code.replace(/"Cito API key missing"/g, '"Service unavailable."');
code = code.replace(/"Cito API key is not configured\."/g, '"Service unavailable."');
code = code.replace(/"Supabase is not configured\."/g, '"Service unavailable."');

fs.writeFileSync(file, code);
console.log("API key errors hidden in server.supabase.js");
