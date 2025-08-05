import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TopnavComponent } from './components/topnav/topnav.component';

const routes: Routes = [
  {path: '', pathMatch :'full', component : DashboardComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent },
   {path: 'userList', pathMatch :'full', component : UserListComponent },
  {path: 'userForm', pathMatch :'full', component : UserFormComponent },
  {path: 'topnav', pathMatch :'full', component : TopnavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
