import { fakerEN } from "@faker-js/faker";

export class ContactRandomizer {
  private fName: string;
  private lName: string;

  constructor(private faker = fakerEN) {
    this.fName = faker.person.firstName();
    this.lName = faker.person.lastName();
  }

  firstName = () => this.fName;
  lastName = () => this.lName;
  phone = () => this.faker.phone.number();

  email = () => this.faker.internet.email({ firstName: this.fName, lastName: this.lName });
  url = () => {
    const userName = this.faker.internet.userName({ firstName: this.fName, lastName: this.lName });
    const protocol = Math.random() < 0.5 ? "http" : "https";
    return this.faker.internet.url({ appendSlash: true, protocol }) + userName + "/";
  };

  streetAddress = () => this.faker.location.streetAddress(true);
  city = () => this.faker.location.city();
  country = () => this.faker.location.country();
  state = () => this.faker.location.state({ abbreviated: true });
  zipCode = () => this.faker.location.zipCode();
}
