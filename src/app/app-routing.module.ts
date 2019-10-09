import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { GoldComponent } from './gold/gold.component';
import { LandComponent } from './land/land.component';
import { HouseComponent } from './house/house.component';
import { BidComponent } from './bid/bid.component';
import { AdminComponent } from './admin/admin.component';
import { GoldRegComponent } from './gold-reg/gold-reg.component';
import { LandRegComponent } from './land-reg/land-reg.component';
import { HouseRegComponent } from './house-reg/house-reg.component';
import { BidDetailsComponent } from './bid-details/bid-details.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent,
  children :[
    {path:'gold-reg',component:GoldRegComponent},
    {path:'land-reg',component:LandRegComponent},
    {path:'house-reg',component:HouseRegComponent},
    {path:'bid-details',component:BidDetailsComponent}
  ]},
  {path:'registration',component:RegistrationComponent},
  {path:'user',component:UserDashboardComponent,
  children :[{path:'gold',component:GoldComponent},
    {path:'house',component:HouseComponent},
    {path:'land',component:LandComponent}
]},
{path:'bid',component:BidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
