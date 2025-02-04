import { Page } from "@playwright/test";
import {BasePage} from "./BasePage";
import {TotalComponent} from "../components/cart/TotalComponent";
import {CartItemRowComponent} from "../components/cart/CartItemRowComponent";

export class ShoppingCartPage extends BasePage{
    constructor(page: Page) {
        super(page);
    }

    public async cartItemRowsComponentList(): Promise<CartItemRowComponent[]> {
        const cartItemRowComponents = await this.page.locator(CartItemRowComponent.selectorValue).all();
        return cartItemRowComponents.map(component => new CartItemRowComponent(component));
    }

    public totalComponent(): TotalComponent {
        return new TotalComponent(this.page.locator(TotalComponent.selectorValue));
    }
}