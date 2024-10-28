import { Locator } from "@playwright/test";
import { selector } from "../SelectorDecorator";


@selector('.product-essential')
export abstract class ComputerEssentialComponent {

    constructor(protected component: Locator){
        this.component = component;
    }

    public abstract selectRAM(type: string): any;
}