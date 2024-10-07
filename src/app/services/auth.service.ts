import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    baseUrl = "http://techs-experts.net/public/api"

    // isLogin=(localStorage.getItem('userToken')) ? true :false;
    // fullName = (localStorage.getItem('userName')) ? localStorage.getItem('userName') : null;



  constructor(private http: HttpClient) { }
  login(obj : any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_login` , obj )
  }
  profile():Observable<any>{
    return this.http.get(`${this.baseUrl}client/profile`)
  }

// for the address page with token
  getUserProfile():Observable<any>{
    return this.http.get('http://techs-experts.net/public/api/client/profile')

  }
  register(obj : any):Observable<any>{
    return this.http.post(`${this.baseUrl}/client/customer_register` , obj )
  }
  isLogin= localStorage.getItem('token')? true :false
  userName:any;



}
