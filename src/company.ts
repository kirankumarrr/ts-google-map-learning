import faker from 'faker';
import { IMappable } from './CustomMap';
export class Company implements IMappable {
  companyName: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPharse = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `Hi I'm Company : ${this.companyName}`;
  }
}
