import { Airline } from "./airline";

export class Schedule {

    constructor(
        public id:number,
        public airline:Airline | undefined,
        public source:string,
        public destination:string,
        public flightDate:Date,
        public startTime:string,
        public endTime:string,
        public numberOfSeats:number,
        public numberOfVacantSeats:number,
        public ticketCost:number) {
    }
}