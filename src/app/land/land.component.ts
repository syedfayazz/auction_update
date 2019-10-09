import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {


  constructor(private _register:RegisterService) { }
  lands : any;
  getLands=async()=>{
    await this._register.getLands().subscribe(
      data=>{
        this.lands=data;
        console.log(data);
      }
    )
  }
  ngOnInit() {
    {
      this.getLands();
    }
  }

}
