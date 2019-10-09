import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Land } from '../land';

@Component({
  selector: 'app-land-reg',
  templateUrl: './land-reg.component.html',
  styleUrls: ['./land-reg.component.css']
})
export class LandRegComponent implements OnInit {
  submitted = false;
  userModel= new Land();
  constructor(private _registerService:RegisterService) { }
ngOnInit() {
} 
onSubmit(){
  this.submitted=true;
  this._registerService.addland(this.userModel)
  .subscribe(
    data=>console.log(this.userModel),
    error=>console.error('error !!!!',error)
  )
}

}