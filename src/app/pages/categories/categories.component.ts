import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

products:any
  constructor( private activated :ActivatedRoute , public global: GlobalService ){

    console.log(this.activated.snapshot.paramMap.get("productId"))

  }


  ngOnInit(){
    let productID = this.activated.snapshot.paramMap.get("productId")
    this.activated.paramMap.subscribe(params=>{
      // console.log(params)
      let productId = params.get('postId')
      this.global.getProducts(productID).subscribe(res=>{
      this.products = res.data
      console.log(this.products)
      })
    })
  }



}
