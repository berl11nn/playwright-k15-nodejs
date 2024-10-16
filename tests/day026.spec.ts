import test from "@playwright/test";
import { getAdParams, scrollToBottom } from "../utils/PageHelper";

test('Handle JS Alert', async ({ page }) => {

    await page.goto('/javascript_alerts');

    const jsAlertLoc = await page.locator('//button[contains(text(),"JS Alert")]');

    //MUST Ddefine event handler first => remind page has dialog thi dung async func
    page.on('dialog', async dialog => {
        await dialog.accept();
    })

    //Trigger event | click on the button
    await jsAlertLoc.click();

    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);

})

test('Handle JS Confirm', async ({ page }) => {

    await page.goto('/javascript_alerts');

    const jsConfirmLoc = await page.locator('//button[contains(text(),"JS Confirm")]');

    //MUST Ddefine event handler first => remind page has dialog thi dung async func//MUST Ddefine event handler first => remind page has dialog thi dung async func
    page.on('dialog', async dialog => {

        console.log(`Alert's content is: ${dialog.message()}`);

        //Dismiss (Cancel)
        await dialog.dismiss();
    })

    //Trigger event | click on the button
    await jsConfirmLoc.click();


    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);

})

test('Handle JS Prompt', async ({ page }) => {

    await page.goto('/javascript_alerts');

    const jsConfirmLoc = await page.locator('//button[contains(text(),"JS Prompt")]');

    //MUST Ddefine event handler first => remind page has dialog thi dung async func//MUST Ddefine event handler first => remind page has dialog thi dung async func
    page.on('dialog', async dialog => {

        console.log(`Alert's content is: ${dialog.message()}`);

        //Dismiss (Cancel)
        await dialog.accept('Im accepting the JS prompt');
    })

    //Trigger event | click on the button
    await jsConfirmLoc.click();


    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);

})

test('Execute JS snippet without params', async ({ page }) => {

    await page.goto('/floating_menu');

    await page.locator('h3').highlight();

    //Scroll to bottom
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight)
    })

    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(5000);

    //Scroll to Top
    await page.evaluate(() => {
        window.scrollTo(0, 0)
    })

    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);
})

test('Execute JS snippet with params', async ({ page }) => {

    await page.goto('/floating_menu');

    //Scroll to bottom
    await scrollToBottom(page, 0.5);


    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);
})

test('Execute JS snippet with params and return value', async ({ page }) => {

    await page.goto('https://www.foodandwine.com/');

    await page.waitForSelector('#leaderboard-flex-1', {timeout: 3000});
    const scrollPercentage: number = 1;
    await scrollToBottom(page, scrollPercentage);
    await page.waitForTimeout(3000);
    const adParams = await getAdParams(page, 'leaderboard-flex-1')
    console.log(`adParams: ${adParams}`);

    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);
})