import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RoutingModule } from './app-routing.module';
import { SlickModule } from 'ngx-slick';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { WhyPrayanComponent } from './why-prayan/why-prayan.component';
import { HeaderComponent } from './header/header.component';
import { TesinominalsComponent } from './tesinominals/tesinominals.component';
import { AssociatesComponent } from './associates/associates.component';

import { NgxCarouselModule } from 'ngx-carousel';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { MobileComponent } from './mobile/mobile.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { DigitalComponent } from './digital/digital.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    WhyPrayanComponent,
    HeaderComponent,
    TesinominalsComponent,
    AssociatesComponent,
    DigitalMarketingComponent,
    CyberSecurityComponent,
    DataAnalyticsComponent,
    MobileComponent,
    WebDevelopmentComponent,
    DigitalComponent,
  ],
  imports: [
    BrowserModule,
  RoutingModule,
  FormsModule,
 NgxCarouselModule,
 ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
