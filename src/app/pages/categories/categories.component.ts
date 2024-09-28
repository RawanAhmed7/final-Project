import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  products: any[]=[]
  constructor(private activated:ActivatedRoute,global :GlobalService){
    console.log(this.activated.snapshot.paramMap.get("data.id"))
  }


  // ngOnInit(){
  //   this.getProducts("id").subscribe(res=>{
  //     console.log(res)
  //     this.products = res
  //   }
  //   )
  // }



}
