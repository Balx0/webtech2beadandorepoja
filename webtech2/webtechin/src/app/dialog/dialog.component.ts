import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Item } from '../model/item';
import {ItemService} from '../services/ItemService';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item, private ItemService: ItemService ) { }

  ngOnInit(): void {
  }

  updateItem(data: Item) {
    console.log(data);
    if(!data.name){
      alert('no name, is not a name');
    }else if(!data.price || data.price < 0 ){
      alert('nothing is free!');
    }else{
    this.ItemService.updateItem(data).subscribe(() => {
      alert('Item updated!');
    }, () => {
      alert('Item could not be updated!');
    }
    );
  }
  }
}

