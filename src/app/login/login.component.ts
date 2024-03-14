import { Component } from '@angular/core';
import { TokenAuthService } from './token-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  token: string = '';
  constructor(private authService: TokenAuthService) {

    console.log(this.token);

  }

  ngOnInit() {
    // this.authService.getAcessToken();
    this.authService.getAcessToken().subscribe({
      next: (result: any) => {
        this.token = result.access_token;
        console.log(result.access_token);
        console.log('correto');
      },
      error: (error) => {
        // console.log(error);
        // console.log('erro');
      }
    });

    console.log(this.token);

  }
}
