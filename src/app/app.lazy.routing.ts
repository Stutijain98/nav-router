import { Routes, RouterModule, PreloadAllModules,NoPreloading } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import {StudentlistComponent } from './Studentlist/Studentlist.component';
import {AddStudentComponent } from './AddStudent/AddStudent.component';
import {LoginComponent } from './AddStudent/Login/Login.component';
import {EditStudentComponent} from './AddStudent/Login/EditStudent/EditStudent.component';

const APP_LAZY_ROUTES: Routes = [
   {
    path: 'Studentlist', component: StudentlistComponent
  },
    {
    path: 'AddStudent/:id', component: AddStudentComponent
  },
    {
    path: 'Login', component: LoginComponent
  },
  { path: 'EditStudent', component: EditStudentComponent }
];

export const APP_LAZY_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_LAZY_ROUTES, {
  preloadingStrategy: NoPreloading,
});