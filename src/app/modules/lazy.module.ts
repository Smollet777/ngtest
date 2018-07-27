import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { PostsComponent } from '../components/posts/posts.component';
import { DataTableComponent } from '../components/data-table/data-table.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: DataTableComponent },
];

@NgModule({
  imports: [
    CommonModule
    , MaterialModule
    , RouterModule.forChild(routes)
  ],
  declarations: [
    AboutComponent
    , PostsComponent
    , DataTableComponent
  ]
})
export class LazyModule { }
