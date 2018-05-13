import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatInputModule
    , MatButtonModule
    , MatIconModule
    , MatSelectModule
    , BrowserAnimationsModule
  ],
  exports: [
    MatInputModule
    , MatButtonModule
    , MatIconModule
    , MatSelectModule
    , BrowserAnimationsModule
  ],
})
export class MaterialModule { }