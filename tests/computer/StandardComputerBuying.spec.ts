import test from "@playwright/test";
import {OrderComputerFlow} from "../../test_flows/computer/OrderComputerFlow";
import {standardComputerData} from "../../test-data/computer/StandardComputerData";
import {PageNavigators} from "../../models/pages/PageNavigators";


standardComputerData.forEach(computerData => {
    test(`Test Standard computer component | RAM: ${computerData.ram}`, async ({page}) => {
        // console.log(computerData)
        await page.goto("/build-your-own-computer")
        const orderComputerFlow: OrderComputerFlow = new OrderComputerFlow(page, computerData);
        await orderComputerFlow.login();
        await orderComputerFlow.buildComputerSpecAndAddToCart();
        await PageNavigators.gotoShoppingCart(page);
        await orderComputerFlow.verifyShoppingCart();
        await orderComputerFlow.agreeTOSAndCheckOut();

        //DEBUG PURPOSE ONLY
        await page.waitForTimeout(5 * 1000);
    })
})