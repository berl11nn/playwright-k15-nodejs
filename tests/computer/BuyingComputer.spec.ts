import test, { Page } from "@playwright/test";
import { ComputerType } from "../../types/ComputerType";
import { BuyingComputerFlow } from "../../test_flows/computer/OrderComputerFlow";

test(`Test Buying computer first design`, async ({page}) => {
    
    const testData: any = {
        type: ComputerType.cheap,
        ram: "2GB"
    }
})


