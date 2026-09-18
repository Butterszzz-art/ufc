const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newWomensBantamweight = `  "Women's Bantamweight": {
    acronym: "WBW",
    champion: {
      name: "Kayla Harrison",
      division: "Women's Bantamweight Division",
      record: "19-1",
      koWins: 6,
      lastFightDate: "Oct 2025",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "USA",
      subWins: 7,
      decWins: 6,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Julianna Peña", record: "13-6", lastFight: "TBD", movement: "-" },
      { rank: 2, name: "Raquel Pennington", record: "17-10", lastFight: "TBD", movement: "-" },
      { rank: 3, name: "Ketlen Vieira", record: "15-4", lastFight: "TBD", movement: "-" },
      { rank: 4, name: "Norma Dumont", record: "12-3", lastFight: "TBD", movement: "-" },
      { rank: 5, name: "Macy Chiasson", record: "11-4", lastFight: "TBD", movement: "-" },
      { rank: 6, name: "Irene Aldana", record: "16-8", lastFight: "TBD", movement: "-" },
      { rank: 7, name: "Ailin Perez", record: "13-2", lastFight: "TBD", movement: "-" },
      { rank: 8, name: "Karol Rosa", record: "18-7", lastFight: "TBD", movement: "-" },
      { rank: 9, name: "Yana Santos", record: "15-9 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 10, name: "Pannie Kianzad", record: "17-9", lastFight: "TBD", movement: "-" },
      { rank: 11, name: "Joselyne Edwards", record: "15-7", lastFight: "TBD", movement: "-" },
      { rank: 12, name: "Chelsea Chandler", record: "7-3", lastFight: "TBD", movement: "-" },
      { rank: 13, name: "Melissa Mullins", record: "8-1", lastFight: "TBD", movement: "-" },
      { rank: 14, name: "Daria Zhelezniakova", record: "10-2", lastFight: "TBD", movement: "-" }
    ]
  },`;

const wbwStart = content.indexOf('  "Women\'s Bantamweight": {');
const wfewStart = content.indexOf('  "Women\'s Featherweight": {');

if (wbwStart !== -1 && wfewStart !== -1) {
  content = content.substring(0, wbwStart) + newWomensBantamweight + '\n' + content.substring(wfewStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Women's Bantamweight successfully");
} else {
  console.log("Failed to find boundaries");
}
