import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  category:any
  constructor(private global : GlobalService ){
    this.global.getCategory().subscribe(res=>{
      // console.log(res.data.slice(0,12))
      this.category=res.data.slice(0,12)

    })
  }



}



