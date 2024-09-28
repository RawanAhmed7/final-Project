import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor( private http:HttpClient) { }
  getProducts(productId:any) :Observable<any>{
    return this.http.get(`http://techs-experts.net/public/api/products-by-category/${productId}`)
  }

  getProductDetails(id:any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  getIcon():Observable<any>{

    return this.http.get(`http://techs-experts.net/public/api/top-categories`)
  }


getCategory():Observable<any>{
  return this.http.get("http://techs-experts.net/public/api/top-categories")

}






}
