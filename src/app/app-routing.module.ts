import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'item/:id',component:ItemComponent},
  {path:'home',component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
