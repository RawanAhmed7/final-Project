import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required ,Validators.email,]),
    password:new FormControl("null",[Validators.required ,Validators.minLength(8)])
  })
  constructor(private auth :AuthService ){}
  get userData(){return this.loginForm.controls}
  get userPassword(){return this.loginForm.controls.password}
  errorMsg = null
  submitted=false
  handleSubmit(){
    this.submitted=true
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(res=>{
        if(res.status == 'Success'){
          console.log('success')
      }
    })
    }

  }
}
