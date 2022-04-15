export class Product {
    descriptions: Description[] = new Array();
    properties: Property[];
    categories: Category[];
    type: string;
    manufacturer: string = "DEFAULT";
    price: number;
    visible: boolean = true;
    shipeable: boolean;
    virtual: boolean;
    canBePurchased: boolean;
    dateAvailable: string = (new Date()).toISOString();
    identifier: string;
    productSpecifications: ProductSpecification;
    sortOrder:number=0;
    quantity:number;
    id:number;

    constructor(obj?: any){
        this.descriptions.push(new Description(obj))
        this.price = obj.rrpPrice;
        this.quantity = obj && Math.trunc(obj.stockQty) || 0;
        this.identifier = obj.sku;
    }
}

export class Description{

    name: string;
    description: string;
    friendlyUrl: string;
    keyWords: string;
    highlights: string;
    metaDescription: string;
    title: string;
    language: string;

    constructor(obj?:any){
        this.name = obj.title;
        this.description = obj.desc;
        this.friendlyUrl = obj.websiteUrl;
        this.keyWords = "";
        this.highlights = "";
        this.metaDescription = "";
        this.title = obj.title;
        this.language = "en";
    }
}

export class Property{

}

export class Category{

}

export class ProductSpecification{
    height: number;
    weight: number;
    length: number;
    width: number;
    model: string=null;
    manufacturer: string="DEFAULT";
    dimensionUnitOfMeasure: string = null;
    weightUnitOfMeasure: string = null;
}

