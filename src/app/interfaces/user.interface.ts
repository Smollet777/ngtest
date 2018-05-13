import { Address } from "../interfaces/address.interface"
export interface UserInterface {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
}