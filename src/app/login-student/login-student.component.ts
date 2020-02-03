import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {StudentList} from '../student.array';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
EditStudent(){
   this.router.navigateByUrl('/EditStudent');
}
}