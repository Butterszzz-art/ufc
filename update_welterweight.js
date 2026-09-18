const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newWelterweight = `  "Welterweight": {
    acronym: "WW",
    champion: {
      name: "Islam Makhachev",
      division: "Welterweight Division",
      record: "28-1",
      koWins: 5,
      lastFightDate: "Nov 15, 2025",
      nextFightOpponent: "Ian Machado Garry",
      nextFightEvent: "UFC 330",
      nextFightDate: "TBD",
      country: "RUS",
      subWins: 12,
      decWins: 11,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Ian Machado Garry", record: "17-1", lastFight: "Dec 7, 2024\\nWin vs Rakhmonov", movement: "-" },
      { rank: 2, name: "Shavkat Rakhmonov", record: "19-0", lastFight: "Dec 7, 2024\\nLoss vs Garry", movement: "-" },
      { rank: 3, name: "Carlos Prates", record: "24-7", lastFight: "May 2026\\nWin vs Della Maddalena", movement: "-" },
      { rank: 4, name: "Michael Morales", record: "19-0", lastFight: "TBD", movement: "-" },
      { rank: 5, name: "Sean Brady", record: "18-2", lastFight: "TBD", movement: "-" },
      { rank: 6, name: "Belal Muhammad", record: "24-6", lastFight: "TBD", movement: "-" },
      { rank: 7, name: "Joaquin Buckley", record: "21-8", lastFight: "TBD", movement: "-" },
      { rank: 8, name: "Jack Della Maddalena", record: "18-3", lastFight: "May 2026\\nLoss vs Prates", movement: "-" },
      { rank: 9, name: "Leon Edwards", record: "22-6", lastFight: "TBD", movement: "-" },
      { rank: 10, name: "Geoff Neal", record: "15-6", lastFight: "TBD", movement: "-" },
      { rank: 11, name: "Vicente Luque", record: "22-10-1", lastFight: "TBD", movement: "-" }
    ]
  },`;

const wwStart = content.indexOf('  "Welterweight": {');
const lwStart = content.indexOf('  "Lightweight": {');

if (wwStart !== -1 && lwStart !== -1) {
  content = content.substring(0, wwStart) + newWelterweight + '\n' + content.substring(lwStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Welterweight successfully");
} else {
  console.log("Failed to find boundaries");
}
