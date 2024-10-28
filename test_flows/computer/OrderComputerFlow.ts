import { Page } from "@playwright/test";
import { ComputerComponentConstructor, ComputerDetailsPage } from "../../models/pages/ComputerDetailsPage";
import { ComputerEssentialComponent } from "../../models/components/computer/ComputerEssentialComponent";

export class BuyingComputerFlow {

    constructor(private page: Page, 
        private computerData: any,
        private computerCompClass: ComputerComponentConstructor<ComputerEssentialComponent>
    ) {
        this.page = page;
        this.computerData = computerData;
        this.computerCompClass = computerCompClass; 
    }

    async buildComputerSpecAndAddToCart(){
        const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp: ComputerEssentialComponent = computerDetailsPage.computerComponent(this.computerCompClass);
    }
}

/**
 * Test: Test data + test flow
 * Test flow: Interact with models(page/component)
 * TestData
 */