import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material";
import { MatListModule } from "@angular/material";

@NgModule({
  imports: [
    MatInputModule
    , MatButtonModule
    , MatIconModule
    , MatSelectModule
    , BrowserAnimationsModule
    , MatToolbarModule
    , MatSidenavModule
    , MatListModule
  ],
  exports: [
    MatInputModule
    , MatButtonModule
    , MatIconModule
    , MatSelectModule
    , BrowserAnimationsModule
    , MatToolbarModule
    , MatSidenavModule
    , MatListModule
  ],
})
export class MaterialModule { }