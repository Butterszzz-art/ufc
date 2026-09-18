const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newFlyweight = `  "Flyweight": {
    acronym: "FLW",
    champion: {
      name: "Joshua Van",
      division: "Flyweight Division",
      record: "17-2-0",
      koWins: 7,
      lastFightDate: "Jun 2026",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "USA",
      subWins: 2,
      decWins: 8,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Alexandre Pantoja", record: "29-6", lastFight: "Dec 6, 2025\\nLoss vs Van", movement: "-" },
      { rank: 2, name: "Brandon Royval", record: "16-7-0", lastFight: "Feb 2026\\nWin vs Moreno", movement: "-" },
      { rank: 3, name: "Brandon Moreno", record: "21-8-2", lastFight: "Feb 2026\\nLoss vs Royval", movement: "-" },
      { rank: 4, name: "Amir Albazi", record: "17-1-0", lastFight: "Jun 2025\\nWin vs Kara-France", movement: "-" },
      { rank: 5, name: "Manel Kape", record: "21-7", lastFight: "Jun 20, 2026\\nWin vs Horiguchi", movement: "-" },
      { rank: 6, name: "Tatsuro Taira", record: "16-1", lastFight: "Jun 2026\\nLoss vs Van", movement: "-" },
      { rank: 7, name: "Asu Almabayev", record: "20-2", lastFight: "Jun 27, 2026\\nWin vs Johnson", movement: "-" },
      { rank: 8, name: "Charles Johnson", record: "15-7", lastFight: "Jun 27, 2026\\nLoss vs Almabayev", movement: "-" },
      { rank: 9, name: "Steve Erceg", record: "12-2", lastFight: "May 2026\\nLoss vs Pantoja", movement: "-" },
      { rank: 10, name: "Tim Elliott", record: "20-13-1", lastFight: "Dec 2025\\nWin vs Mudaerji", movement: "-" },
      { rank: 11, name: "Cody Durden", record: "16-5-1", lastFight: "Dec 2025\\nLoss vs Johnson", movement: "-" }
    ]
  },`;

const flyweightStart = content.indexOf('  "Flyweight": {');
const wswStart = content.indexOf('  "Women\'s Strawweight": {');

if (flyweightStart !== -1 && wswStart !== -1) {
  content = content.substring(0, flyweightStart) + newFlyweight + '\n' + content.substring(wswStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Flyweight successfully");
} else {
  console.log("Failed to find boundaries");
}
