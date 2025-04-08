import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

selector('#opc-shipping_method')
export class ShippingMethodComponent {

    private continueBtnSel = 'input[type="button"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    async selectShippingMethod(method: string) {
        await this.component.locator(`//label[contains(text(), "${method}")]`).click();
    }

    async clickOnContinueBtn(){
        await this.component.locator(this.continueBtnSel).click();
    }
}