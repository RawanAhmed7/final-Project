import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  flag:boolean =true
  constructor(public auth :AuthService, private global:GlobalService){

}


handleLogOut(){
  localStorage.removeItem('token')
  localStorage.removeItem('userName')
  this.global.isLogin = false
}

}
