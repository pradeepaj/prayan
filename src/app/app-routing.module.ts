import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { ContactComponent } from './contact/contact.component';



import { WhyPrayanComponent } from './why-prayan/why-prayan.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'digital-marketing', component: DigitalMarketingComponent },
  // { path: 'data-analytics', component: DataAnalyticsComponent },
  // { path: 'cyber-security', component: CyberSecurityComponent },
  { path: 'why-prayan', component: WhyPrayanComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule],

  declarations: []
})
export class RoutingModule { }
