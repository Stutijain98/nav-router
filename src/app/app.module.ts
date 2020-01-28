import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {StudentlistComponent} from './Studentlist/Studentlist.component';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {APP_LAZY_ROUTING} from './app.lazy.routing';
import {AddStudentComponent} from './AddStudent/AddStudent.component';
import {LoginComponent} from './AddStudent/Login/Login.component';
import {EditStudentComponent} from './AddStudent/Login/EditStudent/EditStudent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,APP_LAZY_ROUTING,RouterModule],
  declarations: [ AppComponent, HelloComponent,StudentlistComponent,AddStudentComponent,LoginComponent,EditStudentComponent ],
  exports:[RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
