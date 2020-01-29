import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Addstudent',
  templateUrl: './Addstudent.component.html'
})
export class AddStudentComponent implements OnInit {
  

constructor(private router:Router)
 
  ngOnInit(){
     
  }
 EditStudent(){
   this.router.navigateByUrl( '/EditStudent');
 }
}

