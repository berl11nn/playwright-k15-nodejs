import { Locator } from "@playwright/test";
import { InformationColumnComponent } from "./InformationColumnComponent";

export class FooterComponent {

    public static selector: string = '.footer';

    constructor(private component: Locator) {
        this.component = component;
    }

    informationColumnComponent(): InformationColumnComponent{
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.selector));
    }
}