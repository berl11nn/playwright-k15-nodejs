import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";

export class CheckOutOptionPage extends BasePage{

    private checkOutAsGuestBtn = 'input[class*="checkout-as-guest-button"]';

    constructor(page: Page) {
        super(page);
    }
    async clickOnCheckOutAsGuestBtn(){
        await this.page.locator(this.checkOutAsGuestBtn).click();
    }
}