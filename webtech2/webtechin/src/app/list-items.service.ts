import { Injectable } from "@angular/core";

@Injectable()
export class ListItemService {
    items = {
        name: "Goat",
        price: "200",
        expiration: new Date(2019, 5, 2)
    }

    listItems(){
        return [this.items.name, this.items.price, this.items.expiration]
    }
}