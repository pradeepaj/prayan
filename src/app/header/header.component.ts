import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  public isIn: boolean = false;   // store state
   constructor() { }
   ngOnInit() {
   }
   toggleState() { // click handler
     const bool = this.isIn;
     this.isIn = bool === false ? true : false;
    // this.isIn = true;
    // this.is

   }

}
