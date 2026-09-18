const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newHeavyweight = `  "Heavyweight": {
    acronym: "HW",
    champion: {
      name: "Tom Aspinall",
      division: "Heavyweight Division",
      record: "15-3",
      koWins: 11,
      lastFightDate: "Oct 25, 2025",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "ENG",
      subWins: 3,
      decWins: 1,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Ciryl Gane", record: "13-3", lastFight: "Jun 14, 2026\\nWin vs Pereira", movement: "-" },
      { rank: 2, name: "Alexander Volkov", record: "39-11", lastFight: "TBD", movement: "-" },
      { rank: 3, name: "Sergei Pavlovich", record: "19-3", lastFight: "TBD", movement: "-" },
      { rank: 4, name: "Jailton Almeida", record: "22-3", lastFight: "TBD", movement: "-" },
      { rank: 5, name: "Waldo Cortes-Acosta", record: "14-1", lastFight: "TBD", movement: "-" },
      { rank: 6, name: "Curtis Blaydes", record: "18-5 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 7, name: "Serghei Spivac", record: "18-5", lastFight: "TBD", movement: "-" },
      { rank: 8, name: "Shamil Gaziev", record: "14-1", lastFight: "TBD", movement: "-" },
      { rank: 9, name: "Marcin Tybura", record: "27-10", lastFight: "TBD", movement: "-" },
      { rank: 10, name: "Rodrigo Nascimento", record: "12-4", lastFight: "TBD", movement: "-" },
      { rank: 11, name: "Tallison Teixeira", record: "9-0", lastFight: "TBD", movement: "-" }
    ]
  },`;

const hwStart = content.indexOf('  "Heavyweight": {');
const lhwStart = content.indexOf('  "Light Heavyweight": {');

if (hwStart !== -1 && lhwStart !== -1) {
  content = content.substring(0, hwStart) + newHeavyweight + '\n' + content.substring(lhwStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Heavyweight successfully");
} else {
  console.log("Failed to find boundaries");
}
