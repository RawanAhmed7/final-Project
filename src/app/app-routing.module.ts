import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';
import { TopheaderComponent } from './shared/topheader/topheader.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AccountComponent } from './pages/account/account.component';
import { ErrorComponent } from './pages/error/error.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {path:"" , component: HomeComponent},
  {path:"home" , component:HomeComponent},

  {path:"topheader" , component:TopheaderComponent},
  {path:"navbar" , component:NavbarComponent},
  {path:"contact" , component:ContactComponent},
  {path:"about" , component:AboutComponent},
  {path:"signup" , component:SignupComponent},
  {path:"footer" , component:FooterComponent},
  {path:"login-page" , component:LoginPageComponent},
  {path:"account" , component:AccountComponent},
  {path:"error" , component:ErrorComponent},
  {path:'', children:[
    {path:'',component:HomeComponent},
    // {path:':id',component:CategoriesComponent}
  ]},
  {path:'product/:productId',component:CategoriesComponent},
  {path:'single-product',component:ProductDetailsComponent},


  {path:"**" , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
