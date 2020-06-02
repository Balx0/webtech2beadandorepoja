import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/ItemService';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../model/item'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemService: ItemService) {
  }
  newItem = new Item();
  ngOnInit() {
  }

  addItem() {
    const post = this.newItem;
   //console.log(post.price);
    this.itemService.addItem(post);
    console.log('pushed');
  }
}
