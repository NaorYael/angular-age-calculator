import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  name = 'Angular ' + VERSION.major;
  form: FormGroup;
  pickerCtl = new FormControl(new Date());
  age: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      pickerCtl: this.pickerCtl,
    });
    this.pickerCtl.valueChanges.subscribe((v) => {
      const date = moment(v).format('MM/DD/YYYY');
      this.calculateAge(date);
      console.log(date);
    });
  }

  public calculateAge(date: any): void {
    if (date) {
      var timeDiff = Math.abs(Date.now() - new Date(date).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      console.log(this.age);
    }
  }
}
