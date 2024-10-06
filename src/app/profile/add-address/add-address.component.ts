import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent {
  constructor(private router:Router){

  }
  onAddAddress() {

    this.router.navigateByUrl("/profile/addresses");
  }

}

