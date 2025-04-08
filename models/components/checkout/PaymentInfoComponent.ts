import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('#opc-payment_info')
export class PaymentInfoComponent {

    private selectCardTypeDropdownSel = '#CreditCardType';
    private cardHolderNameSel = '#CardholderName';
    private cardNumberSel = '#CardNumber';
    private selectMonthDropdownSel = '#ExpireMonth';
    private selectYearDropdownSel = '#ExpireYear';
    private cardCodeSel = '#CardCode';
    private continueBtnSel = 'input[type="button"]';

    constructor(private component: Locator) {
        this.component = component;
    }

    async selectCreditCard(cardType: string) {
        await this.component.locator(this.selectCardTypeDropdownSel).selectOption({label: cardType});
    }

    async inputCardHolderName(name: string) {
        await this.component.locator(this.cardHolderNameSel).fill(name);
    }

    async inputCardNumber(number: string) {
        await this.component.locator(this.cardNumberSel).fill(number);
    }

    async selectExpirationMonth(month: string) {
        await this.component.locator(this.selectMonthDropdownSel).selectOption({label: month});
    }

    async selectExpirationYear(year: string) {
        await this.component.locator(this.selectYearDropdownSel).selectOption({label: year});
    }

    async inputCardCode(cardCode: string) {
        await this.component.locator(this.cardCodeSel).fill(cardCode);
    }

    async clickOnContinueBtn() {
        await this.component.locator(this.continueBtnSel).click();
    }
}