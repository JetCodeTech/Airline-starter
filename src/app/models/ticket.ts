export class Ticket {

    constructor(
        public id:number,
        public airlineName:string,
        public name:string,
        public ageGroup:string,
        public gender:string,
        public mealOption:string,
        public source:string,
        public destination:string,
        public flightDate:Date,
        public flightTime:string,
        public cost:number,
        public pnr:string
    ) {

    }
}