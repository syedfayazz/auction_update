import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.css']
})
export class BidDetailsComponent implements OnInit {

  constructor(private _register:RegisterService) { }
  bids : any;
  getBids=async()=>{
    await this._register.getBids().subscribe(
      data=>{
        this.bids=data;
        console.log(data);
      }
    )
  }
  ngOnInit() {
    {
      this.getBids();
    }
  }

}