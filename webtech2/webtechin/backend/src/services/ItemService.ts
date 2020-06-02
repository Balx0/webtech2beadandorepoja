import { Item } from "../Model/Item";
import { ObjectId } from "mongodb";
import { mongoService } from "./MongoService";


    export async function createTable() {
        await mongoService.createCollection("Item");
    }
    export async function addItem(item: Item) {
        await mongoService.insertOneCollection("Item", item);
    }
    export async function listItems(): Promise<Item[]> {
        return await mongoService.listCollection("Item", {}, {});
    }
    export async function updateItem(item: Item) {
        await mongoService.updateOneCollection("Item", { _id: new ObjectId(item._id) }, { $set: { status: item._id } });
    }
    export async function deleteItem(item: string) {
        await mongoService.deleteOneCollection("Item", { _id: new ObjectId(item) });
    }
