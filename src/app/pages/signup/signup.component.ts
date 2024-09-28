import { Component } from '@angular/core';
import { SignUp } from '../../interfaces/sign-up';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
[x: string]: any;
  user:SignUp={
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber:'',
    password: '',
    confirmPass: ''
  }
  passwordsMatch: boolean = true

  handleSubmit(form:NgForm){
    if (form.valid){
      // console.log(form)
    }

  }
  checkPasswords(password: string, confirmPassword: string) {
    this.passwordsMatch = (password === confirmPassword);
  }

}
