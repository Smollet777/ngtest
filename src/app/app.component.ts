import { Component } from '@angular/core';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThemeService]
})
export class AppComponent {

  theme: string;

  constructor(private themeService: ThemeService) {
    themeService.changeEmitted$.subscribe(
      theme => { this.theme = theme; });
  }

}
