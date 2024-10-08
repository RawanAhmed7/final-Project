import { Component } from '@angular/core';
import { SignUp } from '../../interfaces/sign-up';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { GlobalService } from '../../services/global.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private auth:AuthService, private global:GlobalService, private router:Router){

  }
[x: string]: any;
  user:SignUp={
    first_name: '',
    last_name: '',
    phone:'',
    email: '',
    password: '',
    confirm_password: ''
  }
  passwordsMatch: boolean = true

  handleSubmit(form:NgForm){
    if(form.valid){
      // console.log(this.user)
      this.auth.register(this.user).subscribe(res=>{
        console.log(res)
        this.user={
          first_name: '',
          last_name: '',
          phone:'',
          email: '',
          password: '',
          confirm_password: ''
        }
        localStorage.setItem('userToken',res.data.token)
        localStorage.setItem('userName',res.data.first_name)
        this.global.isLogin=true
        this.router.navigateByUrl("/")


      })


    }

  }
  checkPasswords(password: string, confirmPassword: string) {
    this.passwordsMatch = (password === confirmPassword);
  }

}
