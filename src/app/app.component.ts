import { Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router:Router)
  {

  }

ngOnInit(){
this.router.navigateByUrl('/Studentlist');
}
ViewStudent()
{
  this.router.navigateByUrl('/Studentlist');
}

AddStudent(){
  this.router.navigateByUrl('/AddStudent');
}
Login(){
  this.router.navigateByUrl('/Login');
}
EditStudent(){
   this.router.navigateByUrl('/EditStudent');
}
}
