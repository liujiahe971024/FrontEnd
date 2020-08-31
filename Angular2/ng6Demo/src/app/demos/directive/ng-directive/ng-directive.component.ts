import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.css']
})
export class NgDirectiveComponent implements OnInit {

  myColor = 'red';

  myStyle = {
    color: this.myColor
  };

  myClass = 'my-class';

  people = [
    {name: 'bob', age: 28},
    {name: 'Alice', age: 21},
    {name: 'CCC', age: 22}
  ];

  mySwitch: number;

  constructor() { }

  ngOnInit(): void {
  }

  switch(s: number){
    this.mySwitch = s;
  }
}
