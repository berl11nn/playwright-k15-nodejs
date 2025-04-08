import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector('#opc-billing')
export class BillingAddressComponent {

    private firstNameSel = '#BillingNewAddress_FirstName';
    private lastNameSel = '#BillingNewAddress_LastName';
    private emailSel = '#BillingNewAddress_Email';
    private selectCountrySel = '#BillingNewAddress_CountryId';
    private selectStateSel = '#BillingNewAddress_StateProvinceId';
    private citySel = '#BillingNewAddress_City';
    private address1Sel = '#BillingNewAddress_Address1';
    private zipcodeSel = '#BillingNewAddress_ZipPostalCode';
    private phoneNumberSel = '#BillingNewAddress_PhoneNumber';
    private continueBtnSel = '#billing-buttons-container > input';


    constructor(private component: Locator) {
        this.component = component;
    }

    async inputFirstName(firstName: string) {
        await this.component.locator(this.firstNameSel).fill(firstName);
    }

    async inputLastName(lastName: string) {
        await this.component.locator(this.lastNameSel).fill(lastName);
    }

    async inputEmail(email: string) {
        await this.component.locator(this.emailSel).fill(email);
    }

    async selectCountry(country: string) {
        await this.component.locator(this.selectCountrySel).selectOption(country);
    }

    async selectState(state: string) {
        await this.component.locator(this.selectStateSel).selectOption(state);
    }

    async inputCity(city: string) {
        await this.component.locator(this.citySel).fill(city);
    }

    async inputAddress(address: string) {
        await this.component.locator(this.address1Sel).fill(address);
    }

    async inputZipCode(zipcode: string) {
        await this.component.locator(this.zipcodeSel).fill(zipcode);
    }

    async inputPhoneNumber(phoneNumber: string) {
        await this.component.locator(this.phoneNumberSel).fill(phoneNumber);
    }

    async clickOnContinueBtn(){
        await this.component.locator(this.continueBtnSel).click();
    }
}