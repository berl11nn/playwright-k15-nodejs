import test from "@playwright/test";
import HomePage from "../models/pages/HomePage";

test('Test POM method 01 - Main interaction method', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const headerComp = homePage.HeaderComponent();
    await headerComp.HeaderLogo().click();

    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);
})