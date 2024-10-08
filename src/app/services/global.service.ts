import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor( private http:HttpClient) { }

  baseUrl= "http://techs-experts.net/public/api/"


  getCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}top-categories`)

  }
  getProducts(productId:any) :Observable<any>{
    return this.http.get(`${this.baseUrl}products-by-category/${productId}/0/0`)
  }
  getProductDetails(singleId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}single-product/${singleId}`)
  }
  isLogin= localStorage.getItem('UserToken')? true :false
  userName:any;







}
