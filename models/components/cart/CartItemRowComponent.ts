import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";

@selector('.cart-item-row')
export class CartItemRowComponent {
    constructor(private component: Locator) {
        this.component = component;
    }

    private unitPriceSel = '';
    private quantityInputSel = '';
    private subTotalSel = '';

    public async unitPrice(): Promise<number> {
        const unitPriceText =  await this.component.locator(this.unitPriceSel).textContent();
        return Number(unitPriceText);
    }

    public async quantity(): Promise<number> {
        const quantityText =  await this.component.locator(this.quantityInputSel).getAttribute('value');
        return Number(quantityText);
    }

    public async subTotal(): Promise<number> {
        const subTotalText =  await this.component.locator(this.subTotalSel).textContent();
        return Number(subTotalText);
    }
}