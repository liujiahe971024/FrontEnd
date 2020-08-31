import {AfterViewChecked, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {ImPerson} from '../models/im-person';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  person: ImPerson = new ImPerson('Bob', 22);

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log(new Date() + '- ngAfterViewChecked in cd');
  }

  ngDoCheck(): void {
    console.log(new Date() + '- ngDoCheck in cd');
  }

  ngOnChanges(): void {
    console.log(new Date() + '- ngOnChange in cd');
  }

  addAge(){
    // this.person.age++
    // this.cd.markForCheck();
    let newAge = this.person.age;
    this.person = this.person.merge({'age': ++newAge}) as ImPerson;
    console.log(this.person.age);
  }

  updateAge(){
    this.person = {...this.person, age: ++this.person.age};
  }

}
