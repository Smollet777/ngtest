import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { DataService } from '../../services/data.service';

import { User } from '../../models/user.model';

import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  formUser: FormGroup;
  formHobby: FormGroup;

  user = new User('John Doe', 30, 'john@doe.com', { street: '50 Main st.', city: 'Boston', state: 'MA' }, ['write code', 'watch movies', 'listen to music']);
  posts: Post[];
  error: string;
  states: object = [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WY', name: 'Wyoming' },
    { abbr: 'DC', name: 'District of Columbia' },
    { abbr: 'AS', name: 'American Samoa' },
    { abbr: 'GU', name: 'Guam' },
    { abbr: 'MP', name: 'Northern Mariana Islands' },
    { abbr: 'PR', name: 'Puerto Rico' },
    { abbr: 'UM', name: 'United States Minor Islands' },
    { abbr: 'VI', name: 'Virgin Islands' }
  ];

  constructor(private DataService: DataService, private fb: FormBuilder) {

    this.DataService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    }, // success path
      error => this.error = error // error path
    );

    this.formUser = this.fb.group({
      'name': [this.user.name, Validators.required],
      'age': [this.user.age, [Validators.required, Validators.min(1)]],
      'email': [this.user.email, [Validators.required,
      Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}')]],
      'address': this.fb.group({
        'street': [this.user.address.street, Validators.required],
        'city': [this.user.address.city, Validators.required],
        'state': [this.user.address.state]
      })
    });

    this.formHobby = this.fb.group({
      'hobby': ['', Validators.required],
    });
  }

  get name() { return this.formUser.get('name'); }
  get age() { return this.formUser.get('age'); }
  get email() { return this.formUser.get('email'); }
  get street() { return this.formUser.get('address.street'); }
  get city() { return this.formUser.get('address.city'); }
  get state() { return this.formUser.get('address.state'); }

  get hobby() { return this.formHobby.get('hobby'); }

  getErrorMessage(ac: AbstractControl) {
    return ac.hasError('required') ? 'You must enter a value' :
      ac.hasError('pattern') ? 'Not a valid value' :
        ac.hasError('min') ? 'Value must be greater' :
          '';
  }

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

}
