import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  name: string = 'John Doe';
  age: number = 30;
  email: string = 'john@doe.com';
  address: Address;
  hobbies: string[];
  posts: Post[];

  constructor(private DataService: DataService) {
    this.address = { street: '50 Main st.', city: 'Boston', state: 'MA' }
    this.hobbies = ['write code', 'watch movies', 'listen to music']

    this.DataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

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

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}

interface Address {
  street: string,
  city: string,
  state: string
}
