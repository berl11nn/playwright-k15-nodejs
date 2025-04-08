import {Page} from "@playwright/test";
import {LoginSelectors} from "../models/pages/Login/LoginSelector";

export class LoginFlow {

    constructor(protected page: Page, private loginCreds: {
        username: string,
        password: string
    }) {
        this.page = page;
        this.loginCreds = loginCreds;
    }

    async login() {
        return;
        // const {username, password} = this.loginCreds;
        // const loginPage: LoginPage = new LoginPage(this.page);
        // await loginPage.fillUsername(username);
        // await loginPage.fillPassword(password);
        // await loginPage.clickOnLoginBtn();

    }
}

class LoginPage {

    private usernameSel = '#username';
    private passwordSel = '#password';
    private loginBtnSel = "button[type='submit']";

    constructor(private page: Page) {
        this.page = page;
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameSel).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordSel).fill(password);
    }

    async clickOnLoginBtn() {
        await this.page.locator(this.loginBtnSel).click();
    }
}

