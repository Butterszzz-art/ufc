const fs = require('fs');
const file = 'src/app.supabase.js';

let code = fs.readFileSync(file, 'utf8');

// Replace UI-facing mentions of the data provider
code = code.replace(/SportsData\.io/g, 'Live Stats');
code = code.replace(/sportsdata-/g, 'event-');

fs.writeFileSync(file, code);
console.log("SportsData mentions scrubbed from UI");
