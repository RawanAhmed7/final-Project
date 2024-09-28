import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  flag:boolean =true
  constructor(public auth :AuthService){

}
handleLogOut(){
  localStorage.removeItem('userToken')
  localStorage.removeItem('userName')
  this.auth.isLogin = false
}
}
