import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
    { path: 'list', component: ListItemsComponent },
    { path: 'add', component: AddItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
