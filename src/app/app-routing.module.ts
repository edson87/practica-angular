import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponentComponent } from '../app/login-component/login-component.component'
import { DashboardListComponent } from '../app/dashboard-list/dashboard-list.component'
const routes: Routes = [
  {path:'',redirectTo:'login' ,pathMatch:'full'},
  {path:'login', component:LoginComponentComponent},
  {path:'dashboard', component:DashboardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
