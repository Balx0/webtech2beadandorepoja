import { Item } from "../Model/Item";
import { ObjectId } from "mongodb";
import { mongoService } from "./MongoService";


    export async function createTable() {
        await mongoService.createCollection("items");
    }

    export async function addItem(item: Item) {
        await mongoService.insertOneCollection("items", {
    _id: new ObjectId(item._id),
    name: item.name, price: item.price, expiration: item.expiration
});
    }
    export async function listItems(): Promise<Item[]> {
        return await mongoService.listCollection("items", {}, {});
    }
    export async function updateItem(item: Item) {
        await mongoService.updateOneCollection("items", { _id: new ObjectId(item._id) }, { $set: { name : item.name, price: item.price } });
    }
    export async function deleteItem(itemId: string) {
        await mongoService.deleteOneCollection("items", { _id: new ObjectId(itemId)});
    }
