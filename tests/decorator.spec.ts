import test from "@playwright/test";
import { InformationColumnComponent } from "../models/components/global/footer/InformationColumnComponent";

function getComponentSelector(compClass: any){
    console.log(compClass.selectorValue);
    
}

test('Test decorator', ()=> {
    getComponentSelector(InformationColumnComponent);
})