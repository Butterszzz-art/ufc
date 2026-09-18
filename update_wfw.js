const fs = require('fs');
const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newWomensFlyweight = `  "Women's Flyweight": {
    acronym: "WFW",
    champion: {
      name: "Valentina Shevchenko",
      division: "Women's Flyweight Division",
      record: "25-4-1",
      koWins: 8,
      lastFightDate: "Feb 2026",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "KGZ",
      subWins: 7,
      decWins: 10,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Manon Fiorot", record: "13-2", lastFight: "TBD", movement: "-" },
      { rank: 2, name: "Natália Silva", record: "19-5-1", lastFight: "TBD", movement: "-" },
      { rank: 3, name: "Alexa Grasso", record: "17-5-1", lastFight: "TBD", movement: "-" },
      { rank: 4, name: "Erin Blanchfield", record: "14-2", lastFight: "TBD", movement: "-" },
      { rank: 5, name: "Rose Namajunas", record: "14-7", lastFight: "TBD", movement: "-" },
      { rank: 6, name: "Jasmine Jasudavicius", record: "14-3", lastFight: "TBD", movement: "-" },
      { rank: 7, name: "Maycee Barber", record: "15-2", lastFight: "TBD", movement: "-" },
      { rank: 8, name: "Tracy Cortez", record: "13-2", lastFight: "TBD", movement: "-" },
      { rank: 9, name: "Miranda Maverick", record: "17-5", lastFight: "TBD", movement: "-" },
      { rank: 10, name: "Casey O'Neill", record: "10-2", lastFight: "TBD", movement: "-" },
      { rank: 11, name: "Viviane Araújo", record: "13-7", lastFight: "TBD", movement: "-" },
      { rank: 12, name: "Amanda Ribas", record: "13-6", lastFight: "TBD", movement: "-" },
      { rank: 13, name: "Karine Silva", record: "18-5", lastFight: "TBD", movement: "-" },
      { rank: 14, name: "Wang Cong", record: "7-1", lastFight: "TBD", movement: "-" }
    ]
  },`;

const wfwStart = content.indexOf('  "Women\'s Flyweight": {');
const wbwStart = content.indexOf('  "Women\'s Bantamweight": {');

if (wfwStart !== -1 && wbwStart !== -1) {
  content = content.substring(0, wfwStart) + newWomensFlyweight + '\n' + content.substring(wbwStart);
  fs.writeFileSync(path, content, 'utf8');
  console.log("Updated Women's Flyweight successfully");
} else {
  console.log("Failed to find boundaries");
}
