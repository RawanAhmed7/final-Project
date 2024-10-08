import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required ,Validators.email,]),
    password:new FormControl("null",[Validators.required ])
  })


  constructor(private auth :AuthService ,private router:Router ,private global:GlobalService){


  }
  get userData(){return this.loginForm.controls}
  get userPassword(){return this.loginForm.controls.password}
  errorMsg = null
  submitted=false

  handleSubmit(){
    this.submitted=true
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(res=>{
        if(res.status == 'Success'){
          // console.log('success')
          this.router.navigateByUrl("/")
          localStorage.setItem("userToken",res.data.token)
          this.auth.isLogin=true;
          this.global.userName = res.data.first_name
          localStorage.setItem("userEmail",res.data.email)
          localStorage.setItem("userName",res.data.first_name)
          // localStorage.setItem("userPass",res.data.password)
          console.log(res.data)
        }
      },(error)=>{
        this.errorMsg = error.error.message


      })
    }

  }




}
