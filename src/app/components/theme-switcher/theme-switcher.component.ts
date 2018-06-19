import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html'
})
export class ThemeSwitcherComponent {

  themes = this.themeService.getThemeList();

  defaultTheme = this.themes[0].value;
  //selector with default theme
  theme = new FormControl(this.defaultTheme);

  constructor(private themeService: ThemeService, private overlayContainer: OverlayContainer) {
    //set up default theme
    this.themeChange(this.defaultTheme);
    this.overlayContainer.getContainerElement().classList.add(this.defaultTheme);
  }

  themeChange(theme) {
    this.themeService.emitChange(theme);
  }

}
