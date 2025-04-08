import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";

@selector('.totals')
export class TotalComponent {
    constructor(private component: Locator) {
        this.component = component;
    }

    private priceTableRowSel = 'table tr';
    private priceTypeSel = '.cart-total-left span';
    private priceValueSel = '.cart-total-right .product-price';
    private termOfServiceCheckboxSel = '#termsofservice';
    private checkoutBtnSel = '#checkout';

    public async priceCategories(): Promise<any> {
        let priceCategories: any = {};
        const priceTableRowLocs = await this.component.locator(this.priceTableRowSel).all();
        for (let tableRow of priceTableRowLocs) {
            const priceTypeText = await tableRow.locator(this.priceTypeSel).innerText();
            const priceValueText = await tableRow.locator(this.priceValueSel).innerText();
            priceCategories[priceTypeText] = Number(priceValueText);
        }
        return priceCategories;
    }

    public async acceptTOS(){
        await this.component.locator(this.termOfServiceCheckboxSel).click();
    }

    public async clickOnCheckOutBtn() {
        await this.component.locator(this.checkoutBtnSel).click();
    }
}