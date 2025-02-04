// @ts-ignore
import {Locator} from "@playwright/test";
import {BaseItemDetailComponent} from "../BaseItemDetailComponent";

export abstract class ComputerEssentialComponent extends BaseItemDetailComponent {

    protected constructor(component: Locator) {
        super(component);
    }

    //Những phần chung sẽ là abstract class, ví dụ như RAM, processor, còn cái nào riêng thì viết hàm luôn
    public abstract selectRAM(type: string): Promise<string | null>;

    public abstract selectProcessor(type: string): Promise<string | null>;

    async selectHDD(type: string): Promise<string | null> {
        return await this.selectCompOptions(type);
    }

    async selectOS(type: string): Promise<string | null> {
        return await this.selectCompOptions(type);
    }

    async selectSoftWare(type: string): Promise<string | null> {
        return await this.selectCompOptions(type);
    };

    protected async selectCompOptions(type: string): Promise<string | null> {
        const selectorValue = `//label[contains(text(), "${type}")]`;
        //lấy giá trị của option đầu tiên trong dropdown
        const optionLoc = this.component.locator(selectorValue).first();
        await optionLoc.click();
        //lấy ra text của giá trị đâu tiên hiển thị trong dropdown
        return await optionLoc.textContent();
    }
}