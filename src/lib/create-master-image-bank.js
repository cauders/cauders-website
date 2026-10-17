const fs = require('fs');

const b1 = JSON.parse(fs.readFileSync('src/lib/verified-unsplash-photos.json', 'utf-8'));
const existing = JSON.parse(fs.readFileSync('src/lib/all-valid-unsplash.json', 'utf-8'));

const b2 = {
  "cybersecurity": [
    "https://images.unsplash.com/photo-1757466762489-52fea38071ad",
    "https://images.unsplash.com/photo-1548092372-0d1bd40894a3",
    "https://images.unsplash.com/photo-1757484965213-8393e82789fe",
    "https://images.unsplash.com/photo-1760199789455-49098afd02f0",
    "https://images.unsplash.com/photo-1590065707046-4fde65275b2e",
    "https://images.unsplash.com/photo-1633265486064-086b219458ec",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    "https://images.unsplash.com/photo-1760075999984-bbdea1f86b8d",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
    "https://images.unsplash.com/photo-1614064548237-096f735f344f",
    "https://images.unsplash.com/photo-1629904853716-f0bc54eea481",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    "https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2",
    "https://images.unsplash.com/photo-1661877737564-3dfd7282efcb",
    "https://images.unsplash.com/photo-1661764393655-1dbffee8c0ce",
    "https://images.unsplash.com/photo-1733317302666-82fb00a68109",
    "https://images.unsplash.com/photo-1714618835760-5b2175ad3249",
    "https://images.unsplash.com/photo-1674669009418-2643aa58b11b"
  ],
  "server": [
    "https://images.unsplash.com/photo-1664297989345-f4ff2063b212",
    "https://images.unsplash.com/photo-1639066648921-82d4500abf1a",
    "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41",
    "https://images.unsplash.com/photo-1682146029185-198922bd8350",
    "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5",
    "https://images.unsplash.com/photo-1762163516269-3c143e04175c",
    "https://images.unsplash.com/photo-1682145189653-bb0b79db3415",
    "https://images.unsplash.com/photo-1581092919535-7146ff1a590b",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee",
    "https://images.unsplash.com/photo-1740363268539-cd9093c3b5d1",
    "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b",
    "https://images.unsplash.com/photo-1691435828932-911a7801adfb",
    "https://images.unsplash.com/photo-1742710726634-18e31a278fc2",
    "https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba",
    "https://images.unsplash.com/photo-1579274216947-86eaa4b00475",
    "https://images.unsplash.com/photo-1667264501379-c1537934c7ab",
    "https://images.unsplash.com/photo-1680992046626-418f7e910589",
    "https://images.unsplash.com/photo-1680992046615-065f58bcb4d8",
    "https://images.unsplash.com/photo-1702478475268-aa8ef54c084e"
  ],
  "mobile": [
    "https://images.unsplash.com/photo-1661410847282-d6af31c576a9",
    "https://images.unsplash.com/photo-1787834564572-a0b0e8c6ab55",
    "https://images.unsplash.com/photo-1661326248013-3107a4b2bd91",
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    "https://images.unsplash.com/photo-1773332611522-06b86b48cbf1",
    "https://images.unsplash.com/photo-1759215524472-1b0686fdbd87",
    "https://images.unsplash.com/photo-1558655146-364adaf1fcc9",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    "https://images.unsplash.com/photo-1773332611514-238856b76198",
    "https://images.unsplash.com/photo-1680985551058-2759df426d0d",
    "https://images.unsplash.com/photo-1722209813944-a4ee13b7bfd8",
    "https://images.unsplash.com/photo-1721080250995-5a83519eb2a0",
    "https://images.unsplash.com/photo-1533022139390-e31c488d69e2",
    "https://images.unsplash.com/photo-1480694313141-fce5e697ee25",
    "https://images.unsplash.com/photo-1773332598501-f8612761781a",
    "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
    "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a",
    "https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb"
  ],
  "data_science": [
    "https://images.unsplash.com/photo-1661878265739-da90bc1af051",
    "https://images.unsplash.com/photo-1644088379091-d574269d422f",
    "https://images.unsplash.com/photo-1758073519996-6d3c63b4922c",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    "https://images.unsplash.com/photo-1757898023680-df17835d6b18",
    "https://images.unsplash.com/photo-1758092922270-05163495a197",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e",
    "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86",
    "https://images.unsplash.com/photo-1681586533774-1d9d42425712",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    "https://images.unsplash.com/photo-1542903660-eedba2cda473",
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
    "https://images.unsplash.com/photo-1681487767138-ddf2d67b35c1",
    "https://images.unsplash.com/photo-1545987796-200677ee1011",
    "https://images.unsplash.com/photo-1661872817492-fd0c30404d74",
    "https://images.unsplash.com/photo-1664297950425-99a968926a74",
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
    "https://images.unsplash.com/photo-1644325349124-d1756b79dd42"
  ]
};

const allCategories = { ...b1, ...b2 };
const uniquePool = new Set();
const categorizedUnique = {};

for (const [cat, arr] of Object.entries(allCategories)) {
  categorizedUnique[cat] = [];
  arr.forEach(u => {
    const base = u.split('?')[0];
    if (!uniquePool.has(base)) {
      uniquePool.add(base);
      categorizedUnique[cat].push(base);
    }
  });
}

// Add the rest from existing valid if not already included
categorizedUnique['general_tech'] = [];
existing.forEach(u => {
  const base = u.split('?')[0];
  if (!uniquePool.has(base)) {
    uniquePool.add(base);
    categorizedUnique['general_tech'].push(base);
  }
});

console.log('Total 100% Unique Verified Photos in Bank:', uniquePool.size);
for (const [cat, arr] of Object.entries(categorizedUnique)) {
  console.log(`- ${cat}: ${arr.length} unique photos`);
}

fs.writeFileSync('src/lib/master-image-bank.json', JSON.stringify(categorizedUnique, null, 2));
