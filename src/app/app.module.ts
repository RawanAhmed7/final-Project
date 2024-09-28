import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopheaderComponent } from './shared/topheader/topheader.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccountComponent } from './pages/account/account.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { loginInterceptor } from './interceptors/login.interceptor';


@NgModule({
  declarations: [
    AppComponent,

    TopheaderComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SignupComponent,

    FooterComponent,
      AccountComponent,
      ErrorComponent,
      LoginPageComponent,
      CategoriesComponent,
      ProductDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideHttpClient(
      withInterceptors([loginInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
