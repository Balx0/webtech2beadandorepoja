export class Item {
    _id: string;
    name: string;
    price: number;
    expiration: Date;
    
    constructor(item: any) {
        this._id = item._id;
        this.name = item.name
        this.price = item.price;
        this.expiration = item.expiration;
        
    }
}