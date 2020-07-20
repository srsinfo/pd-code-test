import * as puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  let currentURL;
   
  for (currentURL of ['https://example.com', 'https://facebook.com', 'https://bbc.com']) {
    await page.goto(currentURL);
  }
   await browser.close();
})();
