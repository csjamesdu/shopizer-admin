export class Product {
    descriptions: Description[];
    properties: Property[];
    categories: Category[];
    type: string;
    manufacturer: string = "DEFAULT";
    price: number;
    visible: boolean;
    shipeable: boolean;
    virtual: boolean;
    canBePurchased: boolean;
    dateAvailable: string;
    identifier: string;
    productSpecifications: ProductSpecification;
    sortOrder:number;
    quantity:number;
    id:number;
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
    id: number;   
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

