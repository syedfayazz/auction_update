import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { GoldComponent } from './gold/gold.component';
import { HouseComponent } from './house/house.component';
import { LandComponent } from './land/land.component';
import { BidComponent } from './bid/bid.component';
import { DataComponent } from './data/data.component';
import { AdminComponent } from './admin/admin.component';
import { GoldRegComponent } from './gold-reg/gold-reg.component';
import { LandRegComponent } from './land-reg/land-reg.component';
import { HouseRegComponent } from './house-reg/house-reg.component';
import { BidDetailsComponent } from './bid-details/bid-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserDashboardComponent,
    RegistrationComponent,
    GoldComponent,
    HouseComponent,
    LandComponent,
    BidComponent,
    DataComponent,
    AdminComponent,
    GoldRegComponent,
    LandRegComponent,
    HouseRegComponent,
    BidDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
