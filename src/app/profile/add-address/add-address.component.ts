import { Component } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent {

  addresses: any;
  asDefault = {
    is_default: 0
  }

  constructor(private address: AddressService) { }

  ngOnInit() {
    this.getAddress()
  }

  getAddress() {
    this.address.address().subscribe(res => {
      this.addresses = res.data;
    })
  }

  delete(id: any) {
    this.address.deleteAddress(id).subscribe(res => {
      this.getAddress()
    })
  }

  default(id: any) {
    this.asDefault.is_default = 1;
    this.address.updateAddress(this.asDefault, id).subscribe(res => {
      this.getAddress()
    })
  }

}

