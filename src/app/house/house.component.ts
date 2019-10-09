import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private _register:RegisterService) { }
  houses : any;
  getHouses=async()=>{
    await this._register.getHouses().subscribe(
      data=>{
        this.houses=data;
        console.log(data);
      }
    )
  }
  ngOnInit() {
    {
      this.getHouses();
    }
  }

}