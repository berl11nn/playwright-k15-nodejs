import { Locator, Page } from "@playwright/test";
import { ComputerEssentialComponent } from "../components/computer/ComputerEssentialComponent";

export class ComputerDetailsPage {
    constructor(private page: Page) {
        this.page = page;
    }


    computerComponent<T extends ComputerEssentialComponent>(computerComponentClass: ComputerComponentConstructor<T>): T {
            return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue));
    }
}

export type ComputerComponentConstructor<T extends ComputerEssentialComponent> = new (componentClass: Locator) => T;