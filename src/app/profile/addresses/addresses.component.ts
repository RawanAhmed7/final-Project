import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css'
})
export class AddressesComponent {

  testForm = new FormGroup(
    {
      customer_first_name : new FormControl() ,
      country_id : new FormControl(),
      state_id : new FormControl(),
      city_id : new FormControl()
    }
  )
onSubmit(){}



// get profile
constructor(private auth:AuthService){
  this.auth.getUserProfile().subscribe(res=>{

    console.log(res)
    let userData=res.data
    // let userData=res.userData.this.testForm.controls.customer_first_name=res.data.customer_first_name
this.testForm.patchValue(userData)
  })

}

}
