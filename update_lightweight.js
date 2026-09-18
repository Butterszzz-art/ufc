const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newLightweight = `  "Lightweight": {
    acronym: "LW",
    champion: {
      name: "Justin Gaethje",
      division: "Lightweight Division",
      record: "29-5",
      koWins: 20,
      lastFightDate: "Jun 2026",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "USA",
      subWins: 1,
      decWins: 8,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Ilia Topuria", record: "18-1", lastFight: "Jun 2026\\nLoss vs Gaethje", movement: "-" },
      { rank: 2, name: "Arman Tsarukyan", record: "23-3", lastFight: "TBD", movement: "-" },
      { rank: 3, name: "Charles Oliveira", record: "36-11 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 4, name: "Paddy Pimblett", record: "23-3", lastFight: "TBD", movement: "-" },
      { rank: 5, name: "Max Holloway", record: "27-8", lastFight: "TBD", movement: "-" },
      { rank: 6, name: "Mateusz Gamrot", record: "25-3 (1 NC)", lastFight: "TBD", movement: "-" },
      { rank: 7, name: "Rafael Fiziev", record: "14-4", lastFight: "Jun 27, 2026\\nWin vs Torres", movement: "-" },
      { rank: 8, name: "Benoît Saint Denis", record: "14-3", lastFight: "TBD", movement: "-" },
      { rank: 9, name: "Renato Moicano", record: "21-7-1", lastFight: "TBD", movement: "-" },
      { rank: 10, name: "Grant Dawson", record: "23-2-1", lastFight: "TBD", movement: "-" },
      { rank: 11, name: "Mauricio Ruffy", record: "12-1", lastFight: "TBD", movement: "-" }
    ]
  },`;

const lightweightStart = content.indexOf('  "Lightweight": {');
const fwStart = content.indexOf('  "Featherweight": {');

if (lightweightStart !== -1 && fwStart !== -1) {
  content = content.substring(0, lightweightStart) + newLightweight + '\n' + content.substring(fwStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Lightweight successfully");
} else {
  console.log("Failed to find boundaries");
}
