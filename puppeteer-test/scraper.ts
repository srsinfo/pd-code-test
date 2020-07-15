import * as puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch()

  // Code

  await browser.close()
})()
