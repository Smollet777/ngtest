import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ThemeService {

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  getThemeList() {
    return [
      { value: 'my-light-theme', viewValue: 'light theme' },
      { value: 'my-dark-theme', viewValue: 'dark theme' }
    ];
  }

}
