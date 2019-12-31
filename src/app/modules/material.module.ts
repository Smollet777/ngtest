import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

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
