import { Component } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: TokenAuthService) { }

  ngOnInit() {
    this.authService.getToken().subscribe({
      next: (result: any) => {
        this.saveToken(result.access_token)
        console.log(result);
        console.log('correto');
      },
      error: (error) => {
        console.log(error);
        console.log('erro');
      }
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);

    this.authService.token = token;

    console.log(this.authService.token);
  }
}
