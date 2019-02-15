import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css']
})
export class CyberSecurityComponent implements OnInit {
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
