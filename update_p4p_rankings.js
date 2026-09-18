const fs = require('fs');

const path = './src/app.supabase.js';
let content = fs.readFileSync(path, 'utf8');

const newP4P = `  "Pound-for-Pound": {
    acronym: "P4P",
    champion: {
      name: "Islam Makhachev",
      division: "Welterweight Champion",
      record: "28-1",
      koWins: 5,
      lastFightDate: "Nov 15, 2025",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "RUS",
      subWins: 12,
      decWins: 11,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Islam Makhachev", record: "28-1", lastFight: "Nov 15, 2025\\nWin vs Della Maddalena", movement: "-" },
      { rank: 2, name: "Alexander Volkanovski", record: "28-4", lastFight: "Apr 2026\\nWin vs Lopes", movement: "-" },
      { rank: 3, name: "Petr Yan", record: "20-5", lastFight: "Mar 2026\\nWin vs O'Malley", movement: "-" },
      { rank: 4, name: "Justin Gaethje", record: "28-5", lastFight: "Jun 14, 2026\\nWin vs Topuria", movement: "-" },
      { rank: 5, name: "Ilia Topuria", record: "18-1", lastFight: "Jun 14, 2026\\nLoss vs Gaethje", movement: "-" },
      { rank: 6, name: "Tom Aspinall", record: "16-3", lastFight: "Jan 2026\\nWin vs Gane", movement: "-" },
      { rank: 7, name: "Dricus du Plessis", record: "24-3", lastFight: "Feb 2026\\nLoss vs Strickland", movement: "-" },
      { rank: 8, name: "Magomed Ankalaev", record: "22-1-1", lastFight: "Mar 2026\\nWin vs Pereira", movement: "-" },
      { rank: 9, name: "Alexandre Pantoja", record: "30-6", lastFight: "May 2026\\nLoss vs Van", movement: "-" },
      { rank: 10, name: "Merab Dvalishvili", record: "20-5", lastFight: "Jan 2026\\nWin vs Nurmagomedov", movement: "-" },
      { rank: 11, name: "Sean O'Malley", record: "20-3", lastFight: "Jun 2026\\nWin vs Zahabi", movement: "-" },
      { rank: 12, name: "Ciryl Gane", record: "14-3", lastFight: "Jun 2026\\nWin vs Pereira", movement: "-" },
      { rank: 13, name: "Sean Strickland", record: "31-7", lastFight: "May 2026\\nWin vs Chimaev", movement: "-" },
      { rank: 14, name: "Khamzat Chimaev", record: "15-1", lastFight: "May 2026\\nLoss vs Strickland", movement: "-" },
      { rank: 15, name: "Joshua Van", record: "16-2", lastFight: "May 2026\\nWin vs Pantoja", movement: "-" }
    ]
  },
  "Women's Pound-for-Pound": {
    acronym: "WP4P",
    champion: {
      name: "Valentina Shevchenko",
      division: "Flyweight Champion",
      record: "26-4-1",
      koWins: 8,
      lastFightDate: "Feb 2026",
      nextFightOpponent: "TBD",
      nextFightEvent: "TBD",
      nextFightDate: "TBD",
      country: "KGZ",
      subWins: 7,
      decWins: 11,
      isChamp: true
    },
    fighters: [
      { rank: 1, name: "Valentina Shevchenko", record: "26-4-1", lastFight: "Feb 2026\\nWin vs Fiorot", movement: "-" },
      { rank: 2, name: "Kayla Harrison", record: "19-1", lastFight: "Oct 2025\\nWin vs Peña", movement: "-" },
      { rank: 3, name: "Zhang Weili", record: "26-4", lastFight: "Apr 2026\\nLoss vs Jandiroba", movement: "-" },
      { rank: 4, name: "Natália Silva", record: "20-5-1", lastFight: "Mar 2026\\nWin vs Blanchfield", movement: "-" },
      { rank: 5, name: "Manon Fiorot", record: "13-2", lastFight: "Feb 2026\\nLoss vs Shevchenko", movement: "-" },
      { rank: 6, name: "Mackenzie Dern", record: "16-5", lastFight: "Apr 2026\\nWin vs Weili", movement: "-" },
      { rank: 7, name: "Alexa Grasso", record: "17-5-1", lastFight: "Mar 2026\\nWin vs Namajunas", movement: "-" },
      { rank: 8, name: "Erin Blanchfield", record: "14-2", lastFight: "Mar 2026\\nLoss vs Silva", movement: "-" },
      { rank: 9, name: "Rose Namajunas", record: "14-7", lastFight: "Mar 2026\\nLoss vs Grasso", movement: "-" },
      { rank: 10, name: "Jasmine Jasudavicius", record: "15-3", lastFight: "May 2026\\nWin vs Maverick", movement: "-" },
      { rank: 11, name: "Virna Jandiroba", record: "22-4", lastFight: "Apr 2026\\nWin vs Weili", movement: "-" },
      { rank: 12, name: "Amanda Lemos", record: "15-5-1", lastFight: "Feb 2026\\nWin vs Gomes", movement: "-" },
      { rank: 13, name: "Tracy Cortez", record: "13-2", lastFight: "Jan 2026\\nWin vs O'Neill", movement: "-" },
      { rank: 14, name: "Julianna Peña", record: "13-6", lastFight: "Oct 2025\\nLoss vs Harrison", movement: "-" },
      { rank: 15, name: "Maycee Barber", record: "15-2", lastFight: "Feb 2026\\nWin vs Maverick", movement: "-" }
    ]
  },`;

// Replace Pound-for-Pound block
const p4pStart = content.indexOf('  "Pound-for-Pound": {');
const p4pEnd = content.indexOf('  "Heavyweight": {');
if (p4pStart !== -1 && p4pEnd !== -1) {
  content = content.substring(0, p4pStart) + newP4P + '\n' + content.substring(p4pEnd);
}

// Update ALL_WEIGHT_CLASSES
const classesStart = content.indexOf('const ALL_WEIGHT_CLASSES = [');
const classesEnd = content.indexOf('];', classesStart);
if (classesStart !== -1 && classesEnd !== -1) {
  const newClasses = `const ALL_WEIGHT_CLASSES = [
  "Pound-for-Pound", "Women's Pound-for-Pound", "Heavyweight", "Light Heavyweight", "Middleweight", "Welterweight", 
  "Lightweight", "Featherweight", "Bantamweight", "Flyweight", 
  "Women's Strawweight", "Women's Flyweight", "Women's Bantamweight", "Women's Featherweight"
`;
  content = content.substring(0, classesStart) + newClasses + content.substring(classesEnd);
}

fs.writeFileSync(path, content, 'utf8');
console.log("Updated P4P successfully");
