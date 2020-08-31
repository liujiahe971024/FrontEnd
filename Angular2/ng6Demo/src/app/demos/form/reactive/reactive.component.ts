import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  myFormGroup: FormGroup;

  constructor() {
    this.myFormGroup = new FormGroup({
      name: new FormControl('Bob'),
      age: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myFormGroup.value);
  }
}
