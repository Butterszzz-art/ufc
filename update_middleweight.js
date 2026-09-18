const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newMiddleweight = `  "Middleweight": {
    acronym: "MW",
    champion: {
      name: "Sean Strickland",
      division: "Middleweight Division",
      record: "31-7",
      koWins: 11,
      lastFightDate: "May 2026",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "USA",
      subWins: 4,
      decWins: 16,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Khamzat Chimaev", record: "15-1", lastFight: "May 2026\\nLoss vs Strickland", movement: "-" },
      { rank: 2, name: "Dricus Du Plessis", record: "24-3", lastFight: "TBD", movement: "-" },
      { rank: 3, name: "Nassourdine Imavov", record: "17-5 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 4, name: "Caio Borralho", record: "18-1 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 5, name: "Robert Whittaker", record: "26-9", lastFight: "TBD", movement: "-" },
      { rank: 6, name: "Israel Adesanya", record: "24-5", lastFight: "TBD", movement: "-" },
      { rank: 7, name: "Jared Cannonier", record: "18-8", lastFight: "TBD", movement: "-" },
      { rank: 8, name: "Brendan Allen", record: "25-7", lastFight: "TBD", movement: "-" },
      { rank: 9, name: "Marvin Vettori", record: "19-8-1", lastFight: "TBD", movement: "-" },
      { rank: 10, name: "Anthony Hernandez", record: "15-2 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 11, name: "Roman Dolidze", record: "15-4", lastFight: "TBD", movement: "-" }
    ]
  },`;

const mwStart = content.indexOf('  "Middleweight": {');
const wwStart = content.indexOf('  "Welterweight": {');

if (mwStart !== -1 && wwStart !== -1) {
  content = content.substring(0, mwStart) + newMiddleweight + '\n' + content.substring(wwStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Middleweight successfully");
} else {
  console.log("Failed to find boundaries");
}
