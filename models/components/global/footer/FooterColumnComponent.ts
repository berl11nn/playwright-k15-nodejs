import { Locator } from "@playwright/test";

export class FooterColumnComponent {

    private titleSel = 'h3';
    private linkSel = 'li a';

    constructor(private component: Locator) {
        this.component = component;
    }

    title(): Locator {
        return this.component.locator(this.titleSel);
    }

    async links(): Promise<Array<Locator>> {
        return await this.component.locator(this.linkSel).all();
    }
}