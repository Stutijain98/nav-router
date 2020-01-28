import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-Addstudent',
  templateUrl: './Addstudent.component.html'
})
export class AddStudentComponent implements OnInit {
 
  ngOnInit(){
     
  }

ViewStudent()
{
  this.router.navigateByUrl('/Studentlist');
}
}