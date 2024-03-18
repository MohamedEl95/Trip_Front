import { Client } from "./clientintrface";
import { Hotel } from "./hotelinterface";

export interface Trip {
    id: number;
    clientId: number;
    hotelId: number;
    checkInDate: string;
    checkOutDate: string; 
    type:string;
    client?:Client;
    hotel:Hotel
  }