import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  error: string;
  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    }, // success path
      error => this.error = error // error path
    );
  }

}
