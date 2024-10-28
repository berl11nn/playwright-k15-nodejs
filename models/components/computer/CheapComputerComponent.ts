import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./ComputerEssentialComponent";

export class CheapComputerComponent extends ComputerEssentialComponent {

   constructor(component: Locator) {
      super(component);
   }

   public selectRAM(type: string) {
      console.log("Cheap ComputerComponent | Select RAM");
   }
}