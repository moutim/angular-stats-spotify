import { Component } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  redirectURL: string = '';

  constructor(private tokenService: TokenAuthService) { }

  ngOnInit() {
    console.log(environment);

    this.redirectURL = this.tokenService.redirectURL;
  }
}
