import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoadersCssModule } from 'angular2-loaders-css';

import { AboutComponent } from '../components/about/about.component';
import { PostsComponent } from '../components/posts/posts.component';
import { DataTableComponent } from '../components/data-table/data-table.component';
import { AccordionComponent } from '../components/about/accordion/accordion.component';
import { AccordionGroupComponent } from '../components/about/accordion/accordion-group/accordion-group.component';
import { AccordionHeaderComponent } from '../components/about/accordion/accordion-group/accordion-header/accordion-header.component';
import { AccordionContentComponent } from '../components/about/accordion/accordion-group/accordion-content/accordion-content.component';

import { AccordionContentLazyDirective } from '../components/about/accordion/accordion-content-lazy.directive';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: DataTableComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes),
    LoadersCssModule
  ],
  declarations: [
    AboutComponent,
    AccordionComponent,
    AccordionGroupComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
    AccordionContentLazyDirective,
    PostsComponent,
    DataTableComponent
  ]
})
export class LazyModule { }
