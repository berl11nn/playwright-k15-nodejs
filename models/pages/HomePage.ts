import { Page } from "@playwright/test";
import HeaderComponent from "../components/global/HeaderComponent";
import { PageBodyComponent } from "../components/PageBodyComponent";
import { FooterComponent } from "../components/global/footer/FooterComponent";

export class HomePage {
    constructor(private page: Page) {
        this.page = page;
    }

    headerComponent(): HeaderComponent {
        //HeaderComponent.selector: string
        //Trả về 1 object với constructor là dạng Locator
        // Lúc đó muốn tìm header chỉ cần chỉ cho biết header đang nằm ở đâu trong HomePage
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.selector))
    }

    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.selector))
    }
}