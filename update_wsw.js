const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newWomensStrawweight = `  "Women's Strawweight": {
    acronym: "WSW",
    champion: {
      name: "Mackenzie Dern",
      division: "Women's Strawweight Division",
      record: "16-5",
      koWins: 0,
      lastFightDate: "Oct 25, 2025",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "BRA",
      subWins: 7,
      decWins: 9,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Zhang Weili", record: "26-4", lastFight: "Nov 15, 2025\\nLoss vs Shevchenko", movement: "-" },
      { rank: 2, name: "Tatiana Suarez", record: "12-1", lastFight: "TBD", movement: "-" },
      { rank: 3, name: "Virna Jandiroba", record: "23-4", lastFight: "Apr 4, 2026\\nLoss vs Dern", movement: "-" },
      { rank: 4, name: "Yan Xiaonan", record: "19-5 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 5, name: "Gillian Robertson", record: "17-8", lastFight: "TBD", movement: "-" },
      { rank: 6, name: "Amanda Lemos", record: "15-6-1", lastFight: "TBD", movement: "-" },
      { rank: 7, name: "Jéssica Andrade", record: "27-14", lastFight: "TBD", movement: "-" },
      { rank: 8, name: "Loopy Godinez", record: "13-5", lastFight: "TBD", movement: "-" },
      { rank: 9, name: "Denise Gomes", record: "12-3", lastFight: "TBD", movement: "-" },
      { rank: 10, name: "Tabatha Ricci", record: "12-4", lastFight: "TBD", movement: "-" },
      { rank: 11, name: "Iasmin Lucindo", record: "18-6", lastFight: "TBD", movement: "-" }
    ]
  },`;

const wswStart = content.indexOf('  "Women\'s Strawweight": {');
const wfwStart = content.indexOf('  "Women\'s Flyweight": {');

if (wswStart !== -1 && wfwStart !== -1) {
  content = content.substring(0, wswStart) + newWomensStrawweight + '\n' + content.substring(wfwStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Women's Strawweight successfully");
} else {
  console.log("Failed to find boundaries");
}
