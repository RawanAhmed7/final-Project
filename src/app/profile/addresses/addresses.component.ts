import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { GlobalService } from '../../services/global.service';

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
countries:any




// get profile
constructor(private auth:AuthService,private global:GlobalService){
  this.auth.getUserProfile().subscribe(res=>{

    console.log(res)
    let userData=res.data
    // let userData=res.userData.this.testForm.controls.customer_first_name=res.data.customer_first_name
this.testForm.patchValue(userData)
  })

  this.global.getCountries().subscribe(res=>{
    console.log(res)
    this.countries = res.data

  })

}
stateSelect= true
governorates:any
cities:any

handleGovernate(eve : any){
  console.log(eve)
  console.log(this.testForm.controls.country_id.value)
  this.stateSelect = false
  this.global.getGovernorate(eve.id).subscribe(res=>{
    this.governorates = res.data
  })
}
handleCities(eve:any){
  console.log(eve)
  console.log(this.testForm.controls.country_id.value)
  this.stateSelect = false
  this.global.getGovernorate(eve.id).subscribe(res=>{
    this.governorates = res.data
  })

}


}
