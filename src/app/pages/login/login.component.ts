import { Component } from '@angular/core';
import { Login } from '../../interfaces/login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model : Login ={
    userName:"",
    userEmail:"",
    userPassword:""
  }


  handleSubmit(form :NgForm){
    if(form.valid){
      console.log(form)
    }

  }

}
