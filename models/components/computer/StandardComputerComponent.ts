import {Locator} from "@playwright/test";
import {ComputerEssentialComponent} from "./ComputerEssentialComponent";

export class StandardComputerComponent extends ComputerEssentialComponent {

    private allDropdownSel ='select[id^="product_attribute"]';

    constructor(component: Locator) {
        super(component);
    }


    async selectProcessor(type: string): Promise<string | null> {
        const PROCESSOR_DROP_DOWN_INDEX = 0;
        const allDropdownLoc: Locator[] = await this.component.locator(this.allDropdownSel).all();
        return await this.selectOption(allDropdownLoc[PROCESSOR_DROP_DOWN_INDEX], type);
    }

    async selectRAM(type: string): Promise<string | null> {
        const RAM_DROP_DOWN_INDEX = 1;
        const allDropdownLoc: Locator[] = await this.component.locator(this.allDropdownSel).all();
        return await this.selectOption(allDropdownLoc[RAM_DROP_DOWN_INDEX], type);
    }


    private async selectOption(dropdown: Locator, type: string): Promise<string | null> {
        const allOptions: Locator[] = await dropdown.locator('option').all();
        let optionIndex = -1;
        let optionFullText: string | null = '';
        for (const option of allOptions) {
            optionFullText = await option.textContent();
            if (optionFullText?.startsWith(type)) {
                optionIndex = allOptions.indexOf(option);
                break;
            }
            // if (optionIndex === -1) {
            //     throw new Error(`There is no matching option for ${type}`);
            // }
        }
        await dropdown.selectOption({index: optionIndex});
        return optionFullText;
    }
}