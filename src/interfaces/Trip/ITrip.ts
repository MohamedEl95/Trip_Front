
import { IClient } from "../Client/IClient";
import { IHotel } from "../Hosting/IHotel";

export interface ITrip {
    id: number;
    clientId: number;
    hotelId: number;
    checkInDate: string;
    checkOutDate: string; 
    type:string;
    client?: IClient;
    hotel: IHotel
  }