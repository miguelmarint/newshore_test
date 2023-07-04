import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './core/pages/form/form.component';
import {RouteTableComponent} from './core/pages/routeTable/routeTable.component';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full'},
  { path: 'form', component:FormComponent},
  { path: 'flights/origin/:origin/destination/:destination', component: RouteTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
