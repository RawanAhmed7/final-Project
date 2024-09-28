import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  images: string[] = [
    'cart.png',
    'appstore.svg',
    'googleplay.svg'
  ];

  selectedImage: number = 0;
  selectedColor: string = 'blue';
  selectedSize: string = 'M';

  selectImage(index: number) {
    this.selectedImage = index;
  }

  selectColor(color: string) {
    this.selectedColor = color;
    console.log(`Selected color: ${color}`);
  }

  selectSize(size: string) {
    this.selectedSize = size;
    console.log(`Selected size: ${size}`);
  }















  // singleProduct:any
  // products:any
  // constructor(private  activated :ActivatedRoute ,private global: GlobalService){
  //   console.log(this.activated.snapshot.paramMap.get("id"))

  // }
  // ngOnInit(){
  //   // let id = this.activated.snapshot.paramMap.get("id")
  //   this.activated.paramMap.subscribe(params=>{
  //     let productId = params.get('id')
  //     this.global.getProductDetails(productId).subscribe(res=>{
  //       this.singleProduct = res


  //   })
  // })
  // this.global.getProducts().subscribe(res=>{
  //   this.products = res
  //   })

  //   }

}
