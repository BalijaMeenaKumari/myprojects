import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}} test</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/search" routerLinkActive="active">Search</a>
      <a routerLink="/detail" routerLinkActive="active">Detail</a>
	  <a routerLink="/back" routerLinkActive="active">Back</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
