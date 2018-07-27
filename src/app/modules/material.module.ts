import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    MatInputModule
    , MatButtonModule
    , MatIconModule
    , MatSelectModule
    , MatToolbarModule
    , MatSidenavModule
    , MatListModule
    , MatTableModule
    , MatPaginatorModule
    , MatSortModule
  ],
  exports: [
    MatInputModule
    , MatButtonModule
    , MatIconModule
    , MatSelectModule
    , MatToolbarModule
    , MatSidenavModule
    , MatListModule
    , MatTableModule
    , MatPaginatorModule
    , MatSortModule
  ],
})
export class MaterialModule { }
