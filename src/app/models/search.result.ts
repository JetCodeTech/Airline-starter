export class SearchResultEntity {

    constructor(public scheduleId:number,
        public airlineName:string,
        public startTime:string,
        public endTime:string,
        public ticketCost:number) {
    }
    
}

export class SearchResult {
    constructor(public source:string,
        public destination:string,
        public endTime:string,
        public departureDate:Date,
        public returnDate:Date,
        public departureFlightResultList:Array<SearchResultEntity>,
        public returnFlightResultList:Array<SearchResultEntity>) {
    }
    
}