import { Component, OnInit } from '@angular/core';
import { ListItemService } from '../list-items.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  
  items;
  constructor(service: ListItemService) {
    this.items = service.listItems();
  }

  ngOnInit() {
  }

}
