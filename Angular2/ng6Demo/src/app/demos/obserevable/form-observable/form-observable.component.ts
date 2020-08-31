import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-observable',
  templateUrl: './form-observable.component.html',
  styleUrls: ['./form-observable.component.css']
})
export class FormObservableComponent implements OnInit {

  counterFC: FormControl = new FormControl();
  counter: number;
  counterSub;

  constructor() {
    this.counterSub = this.counterFC.valueChanges
      .subscribe(value => this.counter = value);
  }

  ngOnInit(): void {
  }

  counterUnsubscribe(){
    this.counterSub.unsubscribe();
  }
}
