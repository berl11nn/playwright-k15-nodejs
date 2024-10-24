const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
    testDir: './tests',
    testMatch: '**/*.spec.ts',
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome']
            },
        }
    ],
    use:
    {
        // base URL sẽ apply cho tất cả test
        baseURL: 'https://demowebshop.tricentis.com/',

        //Implicit wait -> Sẽ timeout cho tất cả locator
        actionTimeout: 5 * 1000,

        //Chỉnh chạy headless hay không
        headless: false
    }
})