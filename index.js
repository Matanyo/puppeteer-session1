const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });

    browser.on("targetcreated", async function f() {
        if ((await browser.pages()).length > 1) {
            await (await browser.pages())[0].close();
            browser.off("targetcreated", f);
        }
    });
    debugger;
    // await page.screenshot({ path: "example.png" });

    const page = await browser.newPage();
    await page.goto("https://example.com");
    await page.waitFor(4000);

    await browser.close();
})();
