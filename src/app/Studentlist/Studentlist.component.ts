import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-Studentlist',
  templateUrl: './Studentlist.html'
})
export class StudentlistComponent implements OnInit {

constructor(private router:Router){
  student=[
       {Id:"1",Name:"Stuti",Department:"BCA"},
       {Id:"1",Name:"Stuti",Department:"BCA"},
       {Id:"1",Name:"Stuti",Department:"BCA"}

     ];;

}
  ngOnInit(){
     
  }
  
}