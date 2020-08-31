import {AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {ImPerson} from '../../../models/im-person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {
  @Input()
  person: ImPerson;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log(new Date() + '- ngAfterViewChecked in person-detail');
  }

  ngDoCheck(): void {
    console.log(new Date() + '- ngDoCheck in person-detail');
  }

  ngOnChanges(): void {
    console.log(new Date() + '- ngOnChanges in person-detail');
  }

}
