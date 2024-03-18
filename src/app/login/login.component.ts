import { Component } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  code: string | null = '';

  constructor(
    private authService: TokenAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.code = this.route.snapshot.queryParamMap.get('code');

    if (!this.code) this.code = ''

    this.authService.getToken(this.code).subscribe({
      next: (result: any) => {
        this.saveToken(result.access_token)

        this.router.navigate(['/musics']);
      },
      error: (error) => {
        console.log(error);
        console.log('erro');
      }
    });
  }

  saveToken(token: string) {
    // localStorage.setItem('token', token);

    this.authService.token = token;

    console.log(this.authService.token);
  }
}
