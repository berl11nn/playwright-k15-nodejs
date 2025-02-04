import {ComputerComponentConstructor} from "../../models/pages/ComputerDetailsPage";
import {ComputerEssentialComponent} from "../../models/components/computer/ComputerEssentialComponent";

export interface ComputerDataType {
    loginCred?: {username: string, password: string};
    computerCompClass: ComputerComponentConstructor<ComputerEssentialComponent>
    processorType: string;
    ram: string;
    hdd: string;
    software: string;
    os?: string;
}