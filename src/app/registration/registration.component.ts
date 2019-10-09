import { Register } from '../register';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  submitted = false;
  userModel= new Register();
  constructor(private _registerService:RegisterService) { }
ngOnInit() {
} 
onSubmit(){
  this.submitted=true;
  this._registerService.add(this.userModel)
  .subscribe(
    data=>console.log(this.userModel),
    error=>console.error('Error !!!!',error)
  )
  
  this._registerService.addlogin(this.userModel)
  .subscribe(
    data=>console.log(this.userModel),
    error=>console.error('error !!!!',error)
  )
}

}