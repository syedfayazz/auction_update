import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {

  constructor(private _register:RegisterService) { }
  golds : any;
  getGolds=async()=>{
    await this._register.getGolds().subscribe(
      data=>{
        this.golds=data;
        console.log(data);
      }
    )
  }
  ngOnInit() {
    {
      this.getGolds();
    }
  }

}
