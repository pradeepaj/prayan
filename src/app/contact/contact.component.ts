import { Component, OnInit, ViewChild } from '@angular/core';

class Contact {
  constructor(
  ) {}
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 model: any = {};
  @ViewChild('f') form: any;

  constructor() { }
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.model);

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
   this.form.reset();
  }

}
