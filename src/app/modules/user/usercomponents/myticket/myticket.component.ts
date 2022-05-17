import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
declare var require: any;

import "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";
import jsPDF from 'jspdf';
import { toast, TYPE } from 'src/app/utils/utils';
const htmlToPdfmake = require("html-to-pdfmake");



@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.component.html',
  styleUrls: ['./myticket.component.scss']
})


export class MyticketComponent implements OnInit {
  allData = {
    name: "arun",
    FlightName: "Air india",
    seat: "2",
    date: new Date(),
    source: "india",
    destination: "us"

  }
  showTicket: any = false;
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['Seat No', 'Passenger Name', 'Flight Name', 'Date', 'Action'];
  dataSource: any = this.ELEMENT_DATA;
  constructor(private http: HttpClient, private authService: AuthenticationService) {
    this.getTickets()
  }

  ngOnInit(): void {

  }

  getTickets() {
    this.authService.userId.subscribe(val => {
      if (val) {
        this.http.get("http://localhost:3000/register/" + val).subscribe((res: any) => {
          if (res && res.tickets) {
            this.dataSource = res.tickets.map((va: any) => {
              console.log(va, 'ss')
              return va
            })
          }
        })
      }

    })

  }

  deleteTicket(element: any) {
    console.log(element.id)
    this.authService.userId.subscribe(val => {
      if (val) {
        this.http.get("http://localhost:3000/register/" + val).subscribe((res: any) => {
          if (res && res.tickets) {
            let Index = res.tickets.findIndex((va: any) => va.id == element.id)
            res.tickets = res.tickets.splice(Index == 0 ? 1 : Index, 1)
            this.http.put("http://localhost:3000/register/" + val, res).subscribe(() => { })
            this.dataSource = []
            setTimeout(() => {
              this.getTickets()
            }, 1000)

          }
        })
      }

    })

  }

  public downloadAsPDF(element: any) {
    this.showTicket = true;
    this.allData = {
      name: element.name,
      FlightName: element.flightName,
      seat: element.seat,
      date: element.date,
      source: element.source,
      destination: element.destination

    }

    toast(TYPE.INFO, false, 'Please Press CTRL + P To print the ticket')

    //const pdfTable = this.pdfTable.nativeElement;
    // const doc = new jsPDF();
    // console.log(pdfTable.innerHTML)
    // doc.html(pdfTable.innerHTML, { width: 100 });

    // doc.save('tableToPdf.pdf');
    // saveAsJpeg(pdfTable.innerHTML, { filename: 'Album', printDate: false })
    // htmlToImage.toJpeg(pdfTable.innerHTML, { quality: 0.95 })
    //   .then(function (dataUrl) {
    //     var link = document.createElement('a');
    //     link.download = 'my-image-name.jpeg';
    //     link.href = dataUrl;
    //     link.click();
    //   });
  }
}
