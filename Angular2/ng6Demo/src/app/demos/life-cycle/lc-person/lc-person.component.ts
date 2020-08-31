import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input, OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Person} from '../../models/Person';

@Component({
  selector: 'app-lc-person',
  templateUrl: './lc-person.component.html',
  styleUrls: ['./lc-person.component.css']
})

export class LcPersonComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit{

  @Input()
  person: Person;
  constructor() { }

  ngAfterContentInit(): void {
        // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(new Date() + '- ngOnChanges', changes);
  }

  ngAfterContentChecked(): void {
    console.log(new Date() + '- ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log(new Date() + '- ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log(new Date() + '- ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log(new Date() + 'ngDoCheck');
  }

}
