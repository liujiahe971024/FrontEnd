import {AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {ImPerson} from '../../models/im-person';

@Component({
  selector: 'app-cd-person',
  templateUrl: './cd-person.component.html',
  styleUrls: ['./cd-person.component.css']
})
export class CdPersonComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked{

  @Input()
  person: ImPerson;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log(new Date() + '- ngAfterViewChecked in cd-person');
  }

  ngDoCheck(): void {
    console.log(new Date() + '- ngDoCheck in cd-person');
  }

  ngOnChanges(): void {
    console.log(new Date() + '- ngOnChanges in cd-person');
  }

}
