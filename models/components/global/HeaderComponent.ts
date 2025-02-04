import { Locator } from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('.header')
export default class HeaderComponent {

    private headerLogoSel: string = '.header-logo';
    private shoppingCartSel: string = '#topcartlink a';

    //Sẽ truyền vô cho class 1 constructor dạng Locator
    constructor(private component: Locator) {
        this.component = component;
    }

    //Narrow down searching scope
    headerLogo(): Locator{
        return this.component.locator(this.headerLogoSel);
    }

    async clickOnShoppingCartLink(){
        await this.component.locator(this.shoppingCartSel).click();
    }

    /**
     * HomePage >>> headerComp >>>  HeaderLogo
     * 
     */
}