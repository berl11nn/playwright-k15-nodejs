import { expect, test } from "@playwright/test";

test('Enable/Disable', async ({ page }) => {

    await page.goto('/dynamic_controls')

    const dynamicTextbox = page.locator('#input-example>input');
    const dynamicButton = page.locator('#input-example>button');
    const dynamicMessage = page.locator('#input-example>p');
    const isDynamicTextBoxDisabled = dynamicTextbox.isDisabled();
    const isDynamicTextBoxEnabled = dynamicTextbox.isEnabled();

    if (await isDynamicTextBoxDisabled) {
        await dynamicButton.click();
        await page.waitForTimeout(5000);

        await expect(dynamicMessage).toHaveText("It's enabled!");
        await page.waitForTimeout(2000);

        await dynamicTextbox.fill('Hello world!');
        await page.waitForTimeout(2000);

        await dynamicButton.click();
        await page.waitForTimeout(2000);

        await expect(dynamicMessage).toHaveText("It's disabled!");
    } else if (await isDynamicTextBoxEnabled) {
        await dynamicTextbox.fill('Hello world!');

        await dynamicButton.click();
        await page.waitForTimeout(5000);
        
        await expect(dynamicMessage).toHaveText("It's disabled!");
    }

})