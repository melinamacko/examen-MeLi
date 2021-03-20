import { taggedTemplate } from "@angular/compiler/src/output/output_ast";

export class Item{ 
    id : string;
    price :number;   
    title : string;
    image : string;
    warranty : string;
    description : string
    constructor(){
        this.id = '';
        this.price =  0;
        this.title = '';
        this.image = '';
        this.warranty = '';
        this.description = ''
    }
}
