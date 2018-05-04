import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DataService } from '../../services/data.service';

import { Address } from '../../interfaces/address.interface';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  form: FormGroup;

  name: string = 'John Doe';
  age: number = 30;
  email: string = 'john@doe.com';
  address: Address;
  hobbies: string[];
  posts: Post[];
  error: string;

  constructor(private DataService: DataService, private fb: FormBuilder) {
    this.address = { street: '50 Main st.', city: 'Boston', state: 'MA' }
    this.hobbies = ['write code', 'watch movies', 'listen to music']

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
