import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";

@selector('.totals')
export class TotalComponent {
    constructor(private component: Locator) {
        this.component = component;
    }

    private priceTableRowSel = 'table tr';
    private priceTypeSel = '.cart-total-left span';
    private priceValueSel = '.cart-total-right span';
    private termOfServiceCheckboxSel = '#termsofservice';
    private checkoutBtnSel = '#checkout';

    public async priceCategories(): Promise<any> {
        let priceCategories = {};
        const priceTableRowLocs = await this.component.locator(this.priceTableRowSel).all();
        for (let tableRow of priceTableRowLocs) {
            const priceTypeText = tableRow.locator(this.priceTypeSel).innerText();
            const priceValueText = tableRow.locator(this.priceValueSel).innerText();
            priceCategories[priceTypeText] = Number(priceValueText);
        }
        return priceCategories;

    }
}