import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export class StandardComputerComponent extends ComputerEssentialComponent {

    constructor(component: Locator) {
        super(component);
    }

    public selectRAM(type: string) {
        console.log("Standard ComputerComponent | Select RAM");
    }

}