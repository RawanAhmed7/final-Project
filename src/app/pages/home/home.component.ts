import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private global : GlobalService){

  }

  ngOnINit(){
      this.global.getIcon().subscribe(res=>{
        console.log(res)

      })
    }
  

}
function getIcon() {
  throw new Error('Function not implemented.');
}

