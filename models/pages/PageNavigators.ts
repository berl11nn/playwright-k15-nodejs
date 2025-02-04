import {Page} from "@playwright/test";

export class PageNavigators {

    private static SHOPPING_CART_LINK: string = '/cart';

    public static async gotoShoppingCart(page: Page) {
        await page.goto(this.SHOPPING_CART_LINK);
    }
}