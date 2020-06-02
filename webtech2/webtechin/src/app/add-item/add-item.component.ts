import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/ItemService';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../model/item';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private ItemService: ItemService) {
  }
  newItem = new Item();
  ngOnInit() {
  }

 postItem(item: Item) {
  this.ItemService.addItem(this.newItem).subscribe(() => {
    alert("Item added!");
  }, () => {
    alert("Item could not be added!");
  }
  );

}
}


