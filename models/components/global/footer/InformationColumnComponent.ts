import { Locator } from "@playwright/test";
import { FooterColumnComponent } from "./FooterColumnComponent";
import { selector } from "../../SelectorDecorator";

@selector('.column.information')
export class InformationColumnComponent extends FooterColumnComponent {

    constructor(component: Locator){
        super(component);
    }
}

