import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  themes = [
    { value: 'my-light-theme', viewValue: 'my light theme' },
    { value: 'my-dark-theme', viewValue: 'my dark theme' }
  ];

  defaultTheme = this.themes[0].value;
  //selector with default theme
  theme = new FormControl(this.defaultTheme);
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService, private overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    //set up default theme
    this.themeChange(this.defaultTheme);
    this.overlayContainer.getContainerElement().classList.add(this.defaultTheme);
  }

  themeChange(theme) {
    this.themeService.emitChange(theme);
    this.overlayContainer.getContainerElement().classList.toggle(theme);
  }

}
