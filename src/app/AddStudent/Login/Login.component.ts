import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {

constructor(private router:Router){

}
  ngOnInit(){
     
  }
EditStudent(){
   this.router.navigateByUrl('/EditStudent');
}
}