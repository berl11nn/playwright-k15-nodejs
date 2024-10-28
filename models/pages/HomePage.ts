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

    
    /**
     * Không thể khai báo test data trong component thì sẽ có 2 solution
     * Solution 01: Dùng (ghi) thẳng component trong test flow, không phải trong Page ví dụ như homePage
     * Solution 02: Dùng component trong page như bình thường
     * - 1. Provide test data into page object => (không dùng được narrow down searching scope)
     * - 2.
     */
    
}