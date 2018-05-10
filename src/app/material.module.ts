import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatInputModule
    , MatButtonModule
    , MatCheckboxModule
    , MatIconModule
    , BrowserAnimationsModule
  ],
  exports: [
    MatInputModule
    , MatButtonModule
    , MatCheckboxModule
    , MatIconModule
    , BrowserAnimationsModule
  ],
})
export class MaterialModule { }