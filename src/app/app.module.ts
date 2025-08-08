import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TopnavComponent } from './components/topnav/topnav.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent,
    TopnavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgChartsModule,HttpClientModule, BrowserAnimationsModule,
      MatTableModule,MatPaginatorModule,MatInputModule,MatIconModule,MatTooltipModule,
    MatCardModule,
    MatToolbarModule,MatFormFieldModule,
    MatButtonModule,ReactiveFormsModule,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
