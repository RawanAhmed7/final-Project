import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  details:any
  img:any
  constructor(private activated:ActivatedRoute ,public global:GlobalService){
    console.log(this.activated.snapshot.paramMap.get("singleId"))

  }
  ngOnInit(){
    let singleID = this.activated.snapshot.paramMap.get("singleId")
    this.activated.paramMap.subscribe(params=>{
      // console.log(params)
      let productId = params.get('singleId')
      this.global.getProductDetails(singleID).subscribe(res=>{
      this.details = res.data
      console.log(this.details)
      console.log(this.details[0])
      })
    })

  }










  images: any= [
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

















}
