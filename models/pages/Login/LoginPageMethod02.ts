import { Locator, Page } from "@playwright/test";
import { LoginSelectors } from "./LoginSelector";

export default class LoginPage {
    
    // constructor
    constructor(private page: Page) {
        this.page = page;
    }

     username(): Locator{
        return this.page.locator(LoginSelectors.usernameSel);
    }

    password(): Locator{
        return this.page.locator(LoginSelectors.passwordSel);
    }

    loginBtn(): Locator{
        return this.page.locator(LoginSelectors.loginBtnSel);
    }
}