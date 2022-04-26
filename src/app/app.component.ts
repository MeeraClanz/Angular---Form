import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Form';

  constructor(private user: UsersService) {
    this.user.getData().subscribe((data) => {
      console.warn(data);
    });
  }

  // constructor(private router: Router) {}

  // onContactClicked(): void {
  //   this.router.navigateByUrl('contact');
  // }
  // onRegisterClicked(): void {
  //   this.router.navigateByUrl('register');
  // }
}
