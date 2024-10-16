import { Page } from "@playwright/test";
import { LoginSelectors } from "./LoginSelector";

export default class LoginPage {
    
    // constructor
    constructor(private page: Page) {
        this.page = page;
    }

    //Main interaction methods
    async inputUsername(username: string){
        await this.page.locator(LoginSelectors.usernameSel).fill(username);
    }

    async inputPassword(password: string){
        await this.page.locator(LoginSelectors.passwordSel).fill(password);
    }

    async clickLoginBtn(){
        await this.page.locator(LoginSelectors.loginBtnSel).click();
    }
}