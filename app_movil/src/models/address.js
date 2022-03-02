export class Address{
  constructor(id, label,address) {
    this.id = id; // Id autoincremental
    this.label = label; //Label of the address, like office, home length 10
    this.address = address; //complete address length 200
  }
}