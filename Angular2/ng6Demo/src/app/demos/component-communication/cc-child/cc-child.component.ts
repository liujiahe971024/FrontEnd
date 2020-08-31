import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc-child.component.html',
  styleUrls: ['./cc-child.component.css']
})
export class CcChildComponent implements OnInit {

  @Input('person')
  childPerson;

  @Output()
  onAddAge = new EventEmitter<number>();

  childAge;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.childAge = this.childPerson.age;
  }

  addAge(){
    this.childAge++;
    this.onAddAge.emit(this.childAge);
  }

}
