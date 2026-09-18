const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newLightHeavyweight = `  "Light Heavyweight": {
    acronym: "LHW",
    champion: {
      name: "Alex Pereira",
      division: "Light Heavyweight Division",
      record: "13-4",
      koWins: 10,
      lastFightDate: "Jun 14, 2026",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "BRA",
      subWins: 0,
      decWins: 3,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Magomed Ankalaev", record: "21-2-1 (1 NC)", lastFight: "Oct 4, 2025\\nLoss vs Pereira", movement: "-" },
      { rank: 2, name: "Carlos Ulberg", record: "15-1", lastFight: "TBD", movement: "-" },
      { rank: 3, name: "Jiří Procházka", record: "32-6-1", lastFight: "TBD", movement: "-" },
      { rank: 4, name: "Khalil Rountree Jr.", record: "14-6 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 5, name: "Jan Błachowicz", record: "29-11-2", lastFight: "TBD", movement: "-" },
      { rank: 6, name: "Nikita Krylov", record: "31-11", lastFight: "TBD", movement: "-" },
      { rank: 7, name: "Dominick Reyes", record: "16-5", lastFight: "TBD", movement: "-" },
      { rank: 8, name: "Azamat Murzakanov", record: "16-1", lastFight: "TBD", movement: "-" },
      { rank: 9, name: "Johnny Walker", record: "22-10", lastFight: "TBD", movement: "-" },
      { rank: 10, name: "Bogdan Guskov", record: "18-3", lastFight: "TBD", movement: "-" },
      { rank: 11, name: "Volkan Oezdemir", record: "21-8", lastFight: "TBD", movement: "-" }
    ]
  },`;

const lhwStart = content.indexOf('  "Light Heavyweight": {');
const mwStart = content.indexOf('  "Middleweight": {');

if (lhwStart !== -1 && mwStart !== -1) {
  content = content.substring(0, lhwStart) + newLightHeavyweight + '\n' + content.substring(mwStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Light Heavyweight successfully");
} else {
  console.log("Failed to find boundaries");
}
