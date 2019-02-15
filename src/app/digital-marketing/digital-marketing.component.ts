import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css']
})
export class DigitalMarketingComponent implements OnInit {

  show = false;
  buttonName = 'Course curriculum';
  hide: any;

  toggle() {
  this.show = !this.show;

  if (this.show) {
  this.buttonName = 'Course Highlights';
  // console.log(this.show);
  } else {
  this.buttonName = 'Course curriculum';
  }
  }


 constructor() {

 }

 ngOnInit() {
 }

  }


