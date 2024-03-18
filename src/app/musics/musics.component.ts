import { Component } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrl: './musics.component.css'
})
export class MusicsComponent {
  musics: [] | null = [];

  constructor(
    private tokenService: TokenAuthService,
    private dataService: UserDataService
  ) {}

  ngOnInit() {
    this.dataService.getMostListenedMusics().subscribe({
      next: (result: any) => {
        this.musics = result;
        console.log(result);

      }
    });
  }
}
