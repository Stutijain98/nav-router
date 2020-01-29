import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-EditStudent',
  templateUrl: './EditStudent.html'
})
export class EditStudentComponent implements OnInit {
   student=[
       {Id:"1",Name:"Stuti",Department:"BCA"},
       {Id:"1",Name:"Stuti",Department:"BCA"},
       {Id:"1",Name:"Stuti",Department:"BCA"}

     ]

     

constructor(private router:Router){
 
}
  ngOnInit(){
     
  }

}