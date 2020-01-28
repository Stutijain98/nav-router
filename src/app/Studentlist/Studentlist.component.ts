import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Studentlist',
  templateUrl: './Studentlist.html'
})
export class StudentlistComponent implements OnInit {

constructor(private router:Router){

}
  ngOnInit(){
     
  }
  showSubjects(){
    this.router.navigateByUrl('/subjects');
  }
}