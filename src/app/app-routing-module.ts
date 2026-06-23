import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './list/list';
import { Cart } from './cart/cart';
import { Create } from './create/create';
import { Delete } from './delete/delete';
import { Product } from './product/product';

const routes: Routes = [
  {path: "cart", component: Cart},
  {path: "create", component: Create},
  {path: "delete", component: Delete},
  {path: "list", component: List},
  {path: "product", component: Product},
  {path: "", redirectTo: "homepage", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
