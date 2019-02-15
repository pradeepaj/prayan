import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.css']
})
export class DataAnalyticsComponent implements OnInit {
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

