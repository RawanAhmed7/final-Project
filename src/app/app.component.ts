import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'projecttesting';
  // currentUser: any;

  // ngOnInit() {
  //   Check if there is a logged-in user in localStorage
  //   const storedUser = localStorage.getItem('userProfile');
  //   if (storedUser) {
  //      If user data exists, set the current user from localStorage
  //     this.currentUser = JSON.parse(storedUser);
  //   }
  // }
}
