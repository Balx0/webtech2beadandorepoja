import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../list-items.service';
import { ItemService} from '../services/ItemService';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../model/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items;
 // pls;
  
 /*
  names = [
    {name: 'Goat', price: 200 , expiration: new Date(2019, 5, 2)},
    {name: 'Boad', price: 200 , expiration: new Date(2019, 5, 2)},
    {name: 'Load', price: 200, expiration: new Date(2019, 5, 2)},
];
*/
  constructor(private ItemService: ItemService) {
  }



  displayedColumns: string[] = ['name', 'price', 'expiration'];
  dataSource = this.items;

  ngOnInit() {
    this.getItems();
    this.dataSource = new MatTableDataSource(this.items);
  }

  getItems() {
    this.ItemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
      this.dataSource = new MatTableDataSource(this.items);
    }, () => {
      alert('Error listing items');
    }
    );
  }

}
