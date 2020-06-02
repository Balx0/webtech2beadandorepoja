import { Injectable } from "@angular/core";

@Injectable()
export class ListItemService {
    item1 = {
        name: "Goat",
        price: "200",
        expiration: new Date(2019, 5, 2)
    }
    item2 = {
        name: "Goat",
        price: "200",
        expiration: new Date(2019, 5, 2)
    }
    item3 = {
        name: "Goat",
        price: "200",
        expiration: new Date(2019, 5, 2)
    }
     items = [
        {name: 'Goat', price: 200 ,expiration: new Date(2019, 5, 2)},
        {name: 'Boad', price: 200 ,expiration: new Date(2019, 5, 2)},
        {name: 'Load', price: 200,expiration: new Date(2019, 5, 2)},
    ]

    listItems(){
        return [this.items.map(res => "Name:"+ res.name + "-- Price:" + res.price+ "-- Expiration:" + res.expiration) ]
    }
}