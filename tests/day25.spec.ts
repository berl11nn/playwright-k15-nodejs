import { test } from "@playwright/test";

test('Handle dropdown', async ({ page }) => {
    await page.goto('/');

    const linkFooterLocator = '//a[contains(text(), "Elemental")]';

    //Click on the link
    await page.locator(linkFooterLocator).click();

    //DEBUG PURPOSE
    await page.waitForTimeout(3 * 1000);
})