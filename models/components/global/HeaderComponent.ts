import { Locator } from "@playwright/test";

export default class HeaderComponent {

    public static selector: string = '.header';
    private headerLogoSel: string = '.header-logo';

    //Sẽ truyền vô cho class 1 constructor dạng Locator
    constructor(private component: Locator) {
        this.component = component;
    }

    //Narrow down searching scope
    HeaderLogo(): Locator{
        return this.component.locator(this.headerLogoSel);
    }
}