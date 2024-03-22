import { Component, Input, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.css'
})
export class NavbarMobileComponent {
  @Input() name: string = '';
  @Input() redirectURL: string = '';

  private breakpointObserver = inject(BreakpointObserver);

  constructor(
    private route: Router,
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    logout(drawer: any) {
      drawer.toggle();
      localStorage.removeItem('token');
      this.route.navigate(['/']);
      this.name = '';
    }
}
