import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor( private http:HttpClient) { }

  // getIcon():Observable<any>{

  //   return this.http.get(`http://techs-experts.net/public/api/top-categories`)
  // }


  getCategory():Observable<any>{
    return this.http.get("http://techs-experts.net/public/api/top-categories")

  }
  getProducts(productId:any) :Observable<any>{
    return this.http.get(`http://techs-experts.net/public/api/products-by-category/${productId}/0/0`)
  }
  getProductDetails(singleId:any):Observable<any>{
    return this.http.get(`http://techs-experts.net/public/api/single-product/${singleId}`)
  }






}
