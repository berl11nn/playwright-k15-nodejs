import test from "@playwright/test";
import {HomePage} from "../../models/pages/HomePage";

test('Test List of ProductionItem components', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const pageBodyComp = homePage.pageBodyComponent();
    const productItemCompList = await pageBodyComp.productItemComponentList();
    for(let productItemComp of productItemCompList){
        const productTitle = await productItemComp.productTitleLoc().textContent();
        const productPrice = await productItemComp.productPriceLoc().textContent();
        console.log(`${productTitle?.trim()}: ${productPrice?.trim()}`);
        
    }
})