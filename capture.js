const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const sites = [
  {
    name: 'urbantrop',
    title: 'Urbantrop Architecture',
    url: 'https://www.urbantroparchitecture.com/',
    category: 'Architecture & Spatial Design Studio',
    filename: 'site-urbantrop.jpg'
  },
  {
    name: 'royalshawarma',
    title: 'Royal Shawarma Hub',
    url: 'https://www.royalshawarmahub.com/',
    category: 'Hospitality & Online Ordering Platform',
    filename: 'site-royalshawarma.jpg'
  },
  {
    name: 'arogya',
    title: 'Arogya Ayurveda',
    url: 'https://www.arogyaayurveda.ae/',
    category: 'Healthcare & Ayurvedic Wellness (Abu Dhabi)',
    filename: 'site-arogya.jpg'
  },
  {
    name: 'avizakta',
    title: 'Avizakta',
    url: 'https://www.avizakta.com/',
    category: 'Brand Architecture & Digital Storefront',
    filename: 'site-avizakta.jpg'
  },
  {
    name: 'balanco',
    title: 'Balanco',
    url: 'https://www.balanco.ae/',
    category: 'HVAC TAB, Testing & Commissioning (Abu Dhabi)',
    filename: 'site-balanco.jpg'
  },
  {
    name: 'venus',
    title: 'Venus Al Jadeed',
    url: 'https://www.venus-aljadeed.com/',
    category: 'Commercial Trading & Engineering Services',
    filename: 'site-venus.jpg'
  }
];

async function capture() {
  console.log('Launching installed Google Chrome...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const outDir = path.join(__dirname, 'public', 'images');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const s of sites) {
    try {
      console.log(`Navigating to ${s.title} (${s.url})...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
      
      try {
        await page.goto(s.url, { waitUntil: 'load', timeout: 25000 });
      } catch (e) {
        console.log(`Wait note for ${s.name}: ${e.message}`);
      }

      await new Promise(r => setTimeout(r, 3000));
      const dest = path.join(outDir, s.filename);
      await page.screenshot({ path: dest, type: 'jpeg', quality: 90 });
      console.log(`SUCCESS: Saved -> ${s.filename}`);
      await page.close();
    } catch (err) {
      console.error(`Error capturing ${s.name}:`, err.message);
    }
  }

  await browser.close();
  console.log('FINISHED: All 6 cover pages captured.');
}

capture();
