import test from "@playwright/test";
import { FooterTestFlow } from "../../test_flows/global/FooterTestFlow";

//Nếu muốn test cho nhiều page thì có thể sử dụng cái này
const PAGES = [
    { pageName: 'HomePage', slug: '/' },
    { pageName: 'Login Page', slug: '/login' },
    { pageName: 'Register Page', slug: '/register' },
]

PAGES.forEach(page => {
    const { pageName, slug } = page;
    test(`Test Footer Component on ${pageName}`, async ({ page }) => {
        await page.goto(slug)
        const footerTestFlow = new FooterTestFlow(page);
        await footerTestFlow.verifyFooterComp();
    })
})
