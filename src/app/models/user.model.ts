import { UserInterface } from '../interfaces/user.interface';
import { Address } from '../interfaces/address.interface';

export class User implements UserInterface {

  constructor(public name: string = '',
    public age: number = 1,
    public email: string = '',
    public address: Address,
    public hobbies: string[] = []) {
  }
}
