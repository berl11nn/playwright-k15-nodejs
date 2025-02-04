import {Page} from "@playwright/test";
import {ComputerDetailsPage} from "../../models/pages/ComputerDetailsPage";
import {ComputerEssentialComponent} from "../../models/components/computer/ComputerEssentialComponent";
import {ComputerDataType} from "../../test-data/computer/ComputerDataType";
import {LoginFlow} from "../LoginFlow";
import {ShoppingCartPage} from "../../models/pages/ShoppingCartPage";

export class OrderComputerFlow extends LoginFlow {

    private totalPrice: number | undefined;

    constructor(
        page: Page,
        private readonly computerData: ComputerDataType,
    ) {
        super(page, computerData.loginCred || {username: '', password: ''});
        this.computerData = computerData;
    }

    async buildComputerSpecAndAddToCart() {
        const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp: ComputerEssentialComponent = computerDetailsPage.computerComp(this.computerData.computerCompClass);
        const {
            processorType,
            hdd,
            ram,
            software,
            os
        } = this.computerData;
        await computerComp.unselectAllOptions();
        const processorAdditionalPrice = this.getAdditionalPrice(await computerComp.selectProcessor(processorType));
        const ramAdditionalPrice = this.getAdditionalPrice(await computerComp.selectRAM(ram));
        const hddAdditionalPrice = this.getAdditionalPrice(await computerComp.selectHDD(hdd));
        const softwareAdditionalPrice = this.getAdditionalPrice(await computerComp.selectSoftWare(software));
        let osAdditionalPrice: number = 0;
        if (os) {
            osAdditionalPrice = this.getAdditionalPrice(await computerComp.selectOS(os));
        }

        const originPrice: number = await computerComp.getProductPrice();
        let additionalPrice: number =
            processorAdditionalPrice + ramAdditionalPrice + softwareAdditionalPrice + osAdditionalPrice + hddAdditionalPrice;
        let itemPrice: number = originPrice + additionalPrice;
        let itemQuantity: number = await computerComp.getProductQuantity();
        this.totalPrice = itemPrice * itemQuantity;
        console.log(`totalPrice: ${this.totalPrice}`);

        //Add to cart
        await computerComp.clickOnAddCartButton();
        const barNotiText = await computerDetailsPage.getBarNotificationText();
        if (!barNotiText?.startsWith("The product has been added")) {
            throw new Error('Failed to add product to cart!');
        }
        //Navigate
        await computerDetailsPage.headerComponent().clickOnShoppingCartLink();
    }


    private getAdditionalPrice(optionText: string | null): number {
        if (optionText === null) {
            optionText = '';
        }

        const regex = /\+\d+\.\d+/g;
        const matches = optionText.match(regex);
        if (matches) {
            return Number(matches[0].replace('+', '').trim());
        }
        return 0;
    }

    async verifyShoppingCart() {
        const shoppingCartPage: ShoppingCartPage = new ShoppingCartPage(this.page);
        const cartItemRowComponentList = await shoppingCartPage.cartItemRowsComponentList();
    }

    async agreeTOSAndCheckOut() {
        throw new Error("TBD")
    }
}

/**
 * Test: Test data + test flow
 * Test flow: Interact with models(page/component)
 * Test flow: thường nhận vào ở constructor là Page và Test Data
 */
