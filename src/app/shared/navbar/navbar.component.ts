import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  flag:boolean =true;
  constructor(public auth :AuthService,public global : GlobalService ,private router :Router){

}

handleLogOut(){
  localStorage.removeItem('userToken')
  localStorage.removeItem('userName')
  this.auth.isLogin = false
  this.router.navigateByUrl("/")

}
}
