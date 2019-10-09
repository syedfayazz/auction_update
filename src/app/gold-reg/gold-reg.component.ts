import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Gold } from '../gold';

@Component({
  selector: 'app-gold-reg',
  templateUrl: './gold-reg.component.html',
  styleUrls: ['./gold-reg.component.css']
})
export class GoldRegComponent implements OnInit {
  submitted = false;
  userModel= new Gold();
  constructor(private _registerService:RegisterService) { }
ngOnInit() {
} 
onSubmit(){
  this.submitted=true;
  this._registerService.addgold(this.userModel)
  .subscribe(
    data=>console.log(this.userModel),
    error=>console.error('error !!!!',error)
  )
}

}