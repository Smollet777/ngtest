import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service';

import { User } from '../../models/user.model';

import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  user = new User('John Doe', 30, 'john@doe.com', { street: '50 Main st.', city: 'Boston', state: 'MA' }, ['write code', 'watch movies', 'listen to music']);
  posts: Post[];
  error: string;

  constructor(private DataService: DataService, private fb: FormBuilder) {

    this.DataService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    }, // success path
      error => this.error = error // error path
    );

    this.form = this.fb.group({
      'hobby': ['', Validators.required],
    });
  }

  get hobby() { return this.form.get('hobby'); }

  removeHobby(event: Event, index) {
    event.preventDefault();
    this.hobbies.splice(index, 1);
  }

  addHobby(event: Event, hobby) {
    event.preventDefault();
    if (hobby) {
      this.hobbies.push(hobby);
    }
  }

}
