import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemService } from './list-items.service';
import { ListItemsComponent } from './list-items/list-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MaterialModule} from './add-item/material-module';
import { ItemService } from './services/ItemService';
import { DialogComponent } from './dialog/dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListItemsComponent,
    AddItemComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatCheckboxModule,
    MaterialModule,
    ],
    entryComponents: [
      DialogComponent
    ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
