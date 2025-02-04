import { Locator, Page } from "@playwright/test";
import { ComputerEssentialComponent } from "../components/computer/ComputerEssentialComponent";
import {BasePage} from "./BasePage";

export type ComputerComponentConstructor<T extends ComputerEssentialComponent> = new (componentClass: Locator) => T;

export class ComputerDetailsPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    computerComp<T extends ComputerEssentialComponent>(computerComponentClass: ComputerComponentConstructor<T>): T {
        return new computerComponentClass(this.page.locator(computerComponentClass.selectorValue));
    }
}