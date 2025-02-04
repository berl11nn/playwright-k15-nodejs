import {CheapComputerComponent} from "../../models/components/computer/CheapComputerComponent";
import {commonLoginCreds, exceptLoginCreds} from "../LoginCredData";

export const cheapComputerData = [
    {
        loginCreds: commonLoginCreds,
        computerCompClass: CheapComputerComponent,
        "processorType": "Fast",
        "ram": "2 GB",
        "hdd": "400 GB",
        "software": "Image Viever"
    },
    {
        loginCreds: exceptLoginCreds,
        computerCompClass: CheapComputerComponent,
        "processorType": "Fast",
        "ram": "4 GB",
        "hdd": "320 GB",
        "software": "Office Suite"
    },
    {
        loginCreds: exceptLoginCreds,
        computerCompClass: CheapComputerComponent,
        "processorType": "Fast",
        "ram": "8 GB",
        "hdd": "320 GB",
        "software": "Other Office Suite"
    }
]