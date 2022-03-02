//import { Phone } from './phone';
//import { Address } from './address';

export class Contact{
  constructor(id, name, surname, photo, phones, addresses, birthday) {
    this.id = id; //Id autoincremental
    this.name =  name; // Name length 20
    this.surname =  surname; //last name length 20
    this.photo =  photo; //last name length 255
    this.phones =  phones; //list of phone numbers []
    this.addresses =  addresses; // list of addresses []
    this.birthday =  birthday; //date of contact's birthday length 10
  }
}