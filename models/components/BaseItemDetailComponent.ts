import {selector} from "./SelectorDecorator";
import {Locator} from "@playwright/test";

@selector('.product-essential')
export class BaseItemDetailComponent {

    protected component: Locator;

    private allOptionSel = '.option-list input';
    private productPriceSel = '.product-price';
    private quantitySel = 'input[class*="qty-input"]';
    private addToCartBtnSel = 'input[id^="add-to-cart-button"]';

    protected constructor(component: Locator) {
        this.component = component;
    }

    public async clickOnAddCartButton() {
        await this.component.locator(this.addToCartBtnSel).click();
    }

    public async getProductPrice(): Promise<number> {
        const priceLoc = this.component.locator(this.productPriceSel);
        return Number(await priceLoc.textContent());
    }

    public async getProductQuantity(): Promise<number> {
        return Number(await this.component.locator(this.quantitySel).getAttribute('value'));
    }

    public async unselectAllOptions() {
        const allOptionLoc: Locator[] = await this.component.locator(this.allOptionSel).all();
        for (let optionLoc of allOptionLoc) {
            const isOptionSelected = await optionLoc.getAttribute("checked");
            if (isOptionSelected) {
                await optionLoc.click();
            }
        }
    }
}