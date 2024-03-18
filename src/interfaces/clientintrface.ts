import { Trip } from "./tripinterface";

export interface Client {
    id: number;
    lastname: string;
    firstname: string;
    email: string;
    numpassport: string;
    address: string;
    date_birth: string;
    phoneNumber: string;
    trip:Trip
  }

export interface ClientRegister {
  email:string;
  password:string;
  firstname:string;
  lastname:string;
  address:string;
  phonenumber:string;

}

  
export interface ClientLogin {

  email: string;
  password: string;

}
export interface ClientActivate{

  email: string;
  confirmationCode: string;

}