import { Component, OnInit, ViewChild} from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 model = {
   name: '',
   secname: '',
   phone: '',
   email: '',
   message: '',
 };
  @ViewChild('f') form: any;

  constructor() {}
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.model);

    alert('SUCCESS!! :-)\n\n' + 'Thank you for submitting your queries' + JSON.stringify(this.model));
   this.form.reset();
  }





}
