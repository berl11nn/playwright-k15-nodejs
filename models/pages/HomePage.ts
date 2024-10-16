import { Page } from "@playwright/test";
import HeaderComponent from "../components/global/HeaderComponent";
import { PageBodyComponent } from "../components/PageBodyComponent";
import { FooterComponent } from "../components/global/footer/FooterComponent";

export default class HomePage {
    constructor(private page: Page) {
        this.page = page;
    }

    HeaderComponent(): HeaderComponent {
        //HeaderComponent.selector: string
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }

    PageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.selector))
    }

    FooterComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.selector))
    }
}