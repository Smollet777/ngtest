import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AnotherService } from '../../services/another.service';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [AnotherService]
})

export class UserComponent implements OnInit {
  formUser: FormGroup;
  formHobby: FormGroup;

  user = new User('John Doe', 30, 'john@doe.com', { street: '50 Main st.', city: 'Boston', state: 'MA' }, ['write code', 'watch movies', 'listen to music']);
  states: object = []

  constructor(private userSevice: AnotherService, private fb: FormBuilder) { }

  ngOnInit() {

    this.formUser = this.fb.group({
      'name': [this.user.name, Validators.required],
      'age': [this.user.age, [Validators.required, Validators.min(1)]],
      'email': [this.user.email, Validators.required],
      'address': this.fb.group({
        'street': [this.user.address.street, Validators.required],
        'city': [this.user.address.city, Validators.required],
        'state': [this.user.address.state]
      })
    });

    this.formHobby = this.fb.group({
      'hobby': ['', Validators.required],
    });

    this.getStates();
  }

  get name() { return this.formUser.get('name'); }
  get age() { return this.formUser.get('age'); }
  get email() { return this.formUser.get('email'); }
  get street() { return this.formUser.get('address.street'); }
  get city() { return this.formUser.get('address.city'); }
  get state() { return this.formUser.get('address.state'); }

  get hobby() { return this.formHobby.get('hobby'); }

  addUser(event: Event) {
    event.preventDefault();
    this.user = this.formUser.value;
  }

  removeHobby(event: Event, index) {
    event.preventDefault();
    this.user.hobbies.splice(index, 1);
  }

  addHobby(event: Event, hobby) {
    event.preventDefault();
    if (hobby) {
      this.user.hobbies.push(hobby);
    }
  }

  getStates(): void {
    this.states = this.userSevice.getStates();
  }

}
