import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { RegisterService } from '../register.service';
import { House } from '../house';

@Component({
  selector: 'app-house-reg',
  templateUrl: './house-reg.component.html',
  styleUrls: ['./house-reg.component.css']
})
export class HouseRegComponent implements OnInit {
  submitted = false;
  userModel= new House();
  constructor(private _registerService:RegisterService) { }
ngOnInit() {
} 
onSubmit(){
  this.submitted=true;
  this._registerService.addhouse(this.userModel)
  .subscribe(
    data=>console.log(this.userModel),
    error=>console.error('error !!!!',error)
  )
}

}