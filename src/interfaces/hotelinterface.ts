export interface Hotel {
  address:string
  email:string
  id:number
  image:string
  name:string
  phoneNumber:string
  rating:number
  ville:string
  website:string;
  price?:string;
  }




  export interface Reservation {
    id: number;
    guestName: string;
    date: string;
    time: string;
    table: string;
    phone: string;
    email: string;
    notes: string;
    rooms: Room[];
    flight: Flight | null;
    hotelName: string;
    hotelContact: HotelContact;
  }

  export interface HotelContact {
    phone: string;
    email: string;
  }
  export interface Room {
    type: string;
    number: number;
  }
  
  interface Flight {
    airport: string;
    airportAddress: string;
    airline: string;
    airlineContact: string;
    startFlightDate: string;
    endFlightDate: string;
  }





