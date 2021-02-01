import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormvalidationComponent}from './formvalidation/formvalidation.component'

const routes: Routes = [
  {path:'',component:FormvalidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
