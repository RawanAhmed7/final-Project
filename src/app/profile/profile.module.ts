import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ProfileComponent,
    AddressesComponent,
    AddAddressComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    SharedModuleModule,
  ]
})
export class ProfileModule { }
