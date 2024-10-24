import { test } from "@playwright/test";

test('Link text - XPATH', async ({ page }) => {
    await page.goto('/');

    const linkFooterLocator = '//a[contains(text(), "Elemental")]';

    //Click on the link
    await page.locator(linkFooterLocator).click();

    //DEBUG PURPOSE
    await page.waitForTimeout(3 * 1000);
})

test('Form authentication', async ({ page }) => {
    await page.goto('/login');

    //Form interaction
    


    //DEBUG PURPOSE
    await page.waitForTimeout(3 * 1000);
})