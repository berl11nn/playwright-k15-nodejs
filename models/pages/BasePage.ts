import {Page} from "@playwright/test";
import HeaderComponent from "../components/global/HeaderComponent";

//Class Chứa những cái chung như header footer
export class BasePage {
    private barNotificationSel = '#bar-notification p';

    protected constructor(protected page: Page) {
        this.page = page;
    }

    public async getBarNotificationText(): Promise<string | null> {
        return await this.page.locator(this.barNotificationSel).textContent();
    }

    headerComponent(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.selectorValue));
    }


}