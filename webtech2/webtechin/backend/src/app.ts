import * as express from "express";
import * as cors from "cors";
import { Item } from "./Model/Item";

import { Validator } from "./validators";
import { createTable, listItems, updateItem, deleteItem, addItem } from "./Services/ItemService";
import { createDB } from "./Services/DBCreateService";

export const app = express()

const bodyParser = require('body-parser')
const url = "mongodb://localhost:27017/tdkDB";

const databaseName = "tdkDB";

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.options('*', cors());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});
app.post('/items', async function (req, res) {
    const item: Item = new Item(req.body);
    let errors: Error[] = [];


    errors.push.apply(errors, Validator.itemsPostError(item));
    console.log(errors);
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try {
        await addItem(item);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    return res.status(200).send();

});

app.get('/items', async function (req, res) {
    let items: Item[] = [];
    try {
        items = await listItems();
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    return res.status(200).send(items);
});

app.put('/items', async function (req, res) {
    const item: Item = new Item(req.body);
    let errors: Error[] = [];
    errors.push.apply(errors, Validator.itemsPostError(item));
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try {
        await updateItem(item);
    } catch (e) {
        return res.status(500).send(e);
    }
    return res.status(200).send();
});


app.delete('/items/:itemId', async function (req, res) {
    const itemId = req.params.itemId;
    try {
        await deleteItem(itemId);
    } catch (e) {
        return res.status(500).send(e);
    }
    return res.status(200).send();

});
