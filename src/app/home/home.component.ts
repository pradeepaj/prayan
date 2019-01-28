import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  digidiv: boolean = false;
  datadiv: boolean = false;
  cyberdiv: boolean = false;
  bannerhed: boolean = false;
  bannercon: boolean = false;


 constructor() { window.setTimeout(() => {
     this.digidiv = true;
  }, 1000);
  window.setTimeout(() => {
  this.datadiv = true; }, 3000 );
  window.setTimeout(() => {
    this.cyberdiv = true;
  }, 5000);
  window.setTimeout(() => {
    this.bannerhed = true;
  }, 1000);
  window.setTimeout(() => {
   this.bannercon = true;
 }, 2000);

 }

 ngOnInit() {
 }

 public executeSelectedChange = (event) => {
   console.log(event);
 }
}
