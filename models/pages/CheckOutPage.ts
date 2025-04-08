import {Page} from "@playwright/test";
import {BasePage} from "./BasePage";
import {BillingAddressComponent} from "../components/checkout/BillingAddressComponent";
import {ShippingAddressComponent} from "../components/checkout/ShippingAddressComponent";
import {ShippingMethodComponent} from "../components/checkout/ShippingMethodComponent";
import {PaymentMethodComponent} from "../components/checkout/PaymentMethodComponent";
import {ConfirmOrderComponent} from "../components/checkout/ConfirmOrderComponent";
import {PaymentInfoComponent} from "../components/checkout/PaymentInfoComponent";

export class CheckOutPage extends BasePage{

    constructor(page: Page) {
        super(page);
    }

    public billingAddressComponent(): BillingAddressComponent {
        return new BillingAddressComponent(this.page.locator(BillingAddressComponent.selectorValue));
    }

    public shippingAddressComponent(): ShippingAddressComponent {
        return new ShippingAddressComponent(this.page.locator(ShippingAddressComponent.selectorValue));
    }

    public shippingMethodComponent(): ShippingMethodComponent {
        return new ShippingMethodComponent(this.page.locator(ShippingMethodComponent.selectorValue));
    }

    public paymentMethodComponent(): PaymentMethodComponent {
        return new PaymentMethodComponent(this.page.locator(PaymentMethodComponent.selectorValue));
    }

    public confirmOrderComponent(): ConfirmOrderComponent {
        return new ConfirmOrderComponent(this.page.locator(ConfirmOrderComponent.selectorValue));
    }

    public paymentInfoComponent(): PaymentInfoComponent {
        return new PaymentInfoComponent(this.page.locator(PaymentInfoComponent.selectorValue));
    }
}
