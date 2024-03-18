import { IFlight } from "../Trip/IFlight";
import { IHotelContact } from "./IHotelContact";
import { IRoom } from "./IRoom";


  export interface IReservation {
    id: number;
    guestName: string;
    date: string;
    time: string;
    table: string;
    phone: string;
    email: string;
    notes: string;
    rooms: IRoom[];
    flight: IFlight | null;
    hotelName: string;
    hotelContact: IHotelContact;
  }




