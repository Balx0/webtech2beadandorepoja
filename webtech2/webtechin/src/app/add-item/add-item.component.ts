import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/ItemService';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../model/item';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.min(1)]);
  price = new FormControl('', [Validators.required, Validators.min(1)]);
  expiration = new FormControl('', [Validators.required, Validators.min(1)]);
  constructor(private ItemService: ItemService) {
  }

  itemForm = new FormGroup(
    {
      name: this.name,
      price: this.price,
      expiration: this.expiration
    }
  )

  getErrorMessage() {
    if (this.name.hasError('required') ||
      this.price.hasError('required') ||
      this.expiration.hasError('required')
  ) {
      return 'You must enter a value';
    }

    return this.itemForm.hasError('length') ? 'Not a valid length' : '';
  }


  newItem = new Item();
  ngOnInit() {
  }

 postItem(item: Item) {
   if(!item.name){
     alert('No item name given!')
   }else if(!item.price){
     alert('No item price given!')
   }else if(!item.expiration){
    alert('No item expiration given!')
   } else{
  this.ItemService.addItem(this.newItem).subscribe(() => {
    alert("Item added!");
  }, () => {
    alert("Item could not be added!");
  }
  );

}}
}


