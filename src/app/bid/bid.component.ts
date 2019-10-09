import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Bid } from '../bid';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  userModel = new Bid(this._auth.getUser().username, 0, 0);
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    // console.log(this._auth.getUser().username);
    this._auth.data(this.userModel)
      .subscribe(
        data => console.log(this.userModel),
        error => console.error('Error !!!!', error))
  }
}
