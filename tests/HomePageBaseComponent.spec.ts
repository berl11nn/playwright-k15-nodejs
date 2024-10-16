import test from "@playwright/test";
import HomePage from "../models/pages/HomePage";

test('Test BaseComponent approach', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const homePage = new HomePage(page);
    const footerComp = homePage.FooterComponent();
    const informationColumnComp =  footerComp.informationColumnComponent();
    const columnTitle = await informationColumnComp.title().textContent();
    console.log(columnTitle);
    const columnLinks = await informationColumnComp.links();
    for(let link of columnLinks){
        const linkText = await link.textContent();
        console.log(linkText);
        
    }
})