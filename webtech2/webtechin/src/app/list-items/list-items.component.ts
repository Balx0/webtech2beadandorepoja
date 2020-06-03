import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../list-items.service';
import { ItemService} from '../services/ItemService';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from '../model/item';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  selectedItem;
  items;
 // pls;
  
 /*
  names = [
    {name: 'Goat', price: 200 , expiration: new Date(2019, 5, 2)},
    {name: 'Boad', price: 200 , expiration: new Date(2019, 5, 2)},
    {name: 'Load', price: 200, expiration: new Date(2019, 5, 2)},
];
*/
  constructor(private ItemService: ItemService, public dialog: MatDialog) {
  }



  displayedColumns: string[] = ['name', 'price', 'expiration', 'update', 'delete'];
  dataSource = this.items;

  ngOnInit() {
    this.getItems();
    this.dataSource = new MatTableDataSource(this.items);
  }

  openDialog(item: Item){
    let dialogRef = this.dialog.open(DialogComponent, {data: item});

    dialogRef.afterClosed().subscribe(result =>{
      this.getItems();
      console.log(`dialog result:  ${result}`);
    })
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

  deleteItem(item: Item) {
    this.ItemService.deleteItem(item).subscribe(() => {
      alert("Item Deleted!");
      this.getItems();
    }, () => {
      alert("Item could not be deleted!");
    }
    );
  }

  /*openDialog(item: Item): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }*/
}
