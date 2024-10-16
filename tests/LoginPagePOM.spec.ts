import test from "@playwright/test";
import LoginPage01 from "../models/pages/Login/LoginPageMethod01";
import LoginPage02 from "../models/pages/Login/LoginPageMethod02";

test('Test POM method 01 - Main interaction method', async ({ page }) => {

    //Go to the login page
    await page.goto('/login');

    // Init the POM
    const loginPage = new LoginPage01(page);

    //Interact with elements
    await loginPage.inputUsername('tomsmith');
    await loginPage.inputPassword('SuperSecretPassword!');
    await loginPage.clickLoginBtn();


    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);
})

test('Test POM method 02 - Found Elements', async ({ page }) => {

    //Go to the login page
    await page.goto('/login');

    // Init the POM
    const loginPage = new LoginPage02(page);

    //Interact with elements
    await loginPage.username().fill('tomsmith');
    await loginPage.password().fill('SuperSecretPassword!');
    await loginPage.loginBtn().click();


    //DEBUG PURPOSE ONLY
    await page.waitForTimeout(3000);
})