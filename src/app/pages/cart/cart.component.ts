import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  subtotal = 1250;
  shipping = 50;

  gettotal() {
    return this.subtotal + this.shipping;
  }

}
