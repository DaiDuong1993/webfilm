import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //trang home
  {
    path:"",
    loadChildren:"./home/home.module#HomeModule"
  },
  //trang Admin
  {
    path:"admin",
    loadChildren:"./admin/admin.module#AdminModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
