import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/resume');

  await page.emulateMediaType('screen');

  await page.evaluate(() => {
    // forces 2 column layout for PDF generation
    document.body.classList.add('PDF_GENERATION');
  });

  await page.pdf({
    path: 'resume.pdf',
    margin: { top: '15px', right: '5px', bottom: '15px', left: '5px' },
    printBackground: true,
    format: 'A4',
  });

  await browser.close();
})();
