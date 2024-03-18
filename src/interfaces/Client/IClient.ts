import { ITrip } from "../Trip/ITrip";

export interface IClient {
    id: number;
    lastname: string;
    firstname: string;
    email: string;
    numpassport: string;
    address: string;
    date_birth: string;
    phoneNumber: string;
    trip: ITrip
  }
