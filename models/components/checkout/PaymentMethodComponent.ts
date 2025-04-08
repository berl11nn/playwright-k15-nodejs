import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('#opc-payment_method')
export class PaymentMethodComponent {

    private continueBtnSel = 'input[type="button"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    async selectPaymentMethod(method: string) {
        await this.component.locator(`//label[contains(text(), "${method}")]`).click();
    }

    async clickOnContinueBtn(){
        await this.component.locator(this.continueBtnSel).click();
    }
}