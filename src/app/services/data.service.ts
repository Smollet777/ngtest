import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../interfaces/post.interface'

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
