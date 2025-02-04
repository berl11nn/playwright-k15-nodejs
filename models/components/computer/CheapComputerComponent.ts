import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export class CheapComputerComponent extends ComputerEssentialComponent {

   constructor(component: Locator) {
      super(component);
   }

   async selectRAM(type: string): Promise<string | null> {
      return await this.selectCompOptions(type);
   }

   async selectProcessor(type: string): Promise<string | null> {
      return await this.selectCompOptions(type);
   }

}