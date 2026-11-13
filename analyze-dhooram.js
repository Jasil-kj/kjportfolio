const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  console.log('Navigating to https://dhooram.pages.dev ...');
  try {
    await page.goto('https://dhooram.pages.dev/', { waitUntil: 'load', timeout: 30000 });
  } catch (e) {
    console.log('Load notice:', e.message);
  }

  await new Promise(r => setTimeout(r, 3000));

  const pageData = await page.evaluate(() => {
    const title = document.title;
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map(el => el.innerText.trim()).filter(Boolean);
    const textPreview = document.body.innerText.slice(0, 1000);
    return { title, metaDesc, headings, textPreview };
  });

  console.log('PAGE DATA:', JSON.stringify(pageData, null, 2));

  await page.screenshot({ path: './public/images/site-dhooram.jpg', type: 'jpeg', quality: 90 });
  console.log('Saved screenshot -> ./public/images/site-dhooram.jpg, size:', fs.statSync('./public/images/site-dhooram.jpg').size);

  await browser.close();
})();

