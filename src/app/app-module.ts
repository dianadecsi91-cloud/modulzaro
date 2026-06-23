import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { List } from './list/list';
import { Cart } from './cart/cart';
import { Product } from './product/product';
import { Create } from './create/create';
import { Delete } from './delete/delete';
import { FormsModule } from '@angular/forms';
import { Hompage } from './hompage/hompage';

@NgModule({
  declarations: [App, List, Cart, Product, Create, Delete, Hompage],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
