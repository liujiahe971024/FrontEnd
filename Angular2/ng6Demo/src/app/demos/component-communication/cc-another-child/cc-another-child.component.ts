import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cc-another-child',
  templateUrl: './cc-another-child.component.html',
  styleUrls: ['./cc-another-child.component.css']
})
export class CcAnotherChildComponent implements OnInit {

  @Input()
  person;

  constructor() { }

  ngOnInit(): void {
  }

}
