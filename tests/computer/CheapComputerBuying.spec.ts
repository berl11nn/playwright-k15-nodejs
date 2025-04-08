import test from "@playwright/test";
import {OrderComputerFlow} from "../../test_flows/computer/OrderComputerFlow";
import {cheapComputerData} from "../../test-data/computer/CheapComputerData";
import {PageNavigators} from "../../models/pages/PageNavigators";

cheapComputerData.forEach(computerData => {
    test(`Test Cheap computer component | RAM: ${computerData.ram}`, async ({page}) => {
        await page.goto("/build-your-cheap-own-computer")
        const orderComputerFlow: OrderComputerFlow = new OrderComputerFlow(page, computerData);
        await orderComputerFlow.login();
        await orderComputerFlow.buildComputerSpecAndAddToCart();
        await PageNavigators.gotoShoppingCart(page);
        await orderComputerFlow.verifyShoppingCart();
        await orderComputerFlow.agreeTOSAndCheckOut();
        await orderComputerFlow.inputBillingAddress();
        await orderComputerFlow.inputShippingAddress();
        await orderComputerFlow.selectShippingMethod();
        await orderComputerFlow.selectPaymentMethod();
        await orderComputerFlow.inputPaymentInfo();
        await orderComputerFlow.confirmOrder();

        //DEBUG PURPOSE ONLY
        await page.waitForTimeout(5000);
    })
})