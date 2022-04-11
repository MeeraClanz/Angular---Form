import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Form';

  constructor(private router: Router) {}

  onContactClicked(): void {
    this.router.navigateByUrl('contact');
  }
  onRegisterClicked(): void {
    this.router.navigateByUrl('register');
  }
}
