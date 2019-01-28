import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    WhyPrayanComponent,
    HeaderComponent,
    TesinominalsComponent,
    AssociatesComponent
  ],
  imports: [
    BrowserModule,
  RoutingModule,
  FormsModule,
 NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
