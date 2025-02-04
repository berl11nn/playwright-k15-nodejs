import { Locator } from "@playwright/test";
import { ProductItemComponent } from "./ProductItemComponent";
import {selector} from "./SelectorDecorator";

@selector('.page-body')
export class PageBodyComponent {

    public static selector: string = '.page-body';

    constructor(private component: Locator) {
        this.component = component;
    }

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productCompList = await this.component.locator(ProductItemComponent.selector).all();
        return productCompList.map(locator => new ProductItemComponent(locator));
    }
    
}