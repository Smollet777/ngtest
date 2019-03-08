import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$ = new BehaviorSubject([]);
  loading = true;

  private readonly limit = 5;
  private page = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.loading = true;
    this.dataService
      .getPosts(this.limit, this.page++).pipe(
        map(posts => {
          const currentPosts = this.posts$.getValue();
          this.posts$.next(currentPosts.concat(posts));
        }),
        take(1)
      )
      .subscribe(_ => this.loading = false);
  }

  onScroll() {
    this.getPosts();
  }

}
