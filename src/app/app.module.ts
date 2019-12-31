import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from './modules/material.module';

import { EmailValidatorDirective } from './directives/email-validator.directive';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

const routes: Routes = [
  { path: '', component: UserComponent, pathMatch: 'full' },
  {
    path: '', loadChildren: () => import('./modules/lazy.module')
      .then(m => m.LazyModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NotFoundComponent,
    EmailValidatorDirective,
    NavbarComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
