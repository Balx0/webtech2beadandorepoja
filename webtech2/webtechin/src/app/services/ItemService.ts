import { mongoService } from "../../../backend/src/services/MongoService";
import { Inject, Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {
    item: Item[] = [];
    baseURL: string = 'http://localhost:3000';
    constructor(private http: HttpClient) {

    }

    addItem(item: Item): Observable<Item> {
        return this.http.post<Item>(this.baseURL + '/items', item);
    }
    updateItem(item: Item): Observable<Item> {
        return this.http.put<Item>(this.baseURL + '/items', item);
    }
    deleteItem(item: Item): Observable<Item> {
        return this.http.delete<Item>(this.baseURL + '/items/' + item._id);
    }
    getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(this.baseURL + '/items');
    }
}

