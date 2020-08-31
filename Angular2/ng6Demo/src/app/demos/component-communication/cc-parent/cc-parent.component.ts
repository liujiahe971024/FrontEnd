import { Component, OnInit } from '@angular/core';
import {CcServiceService} from '../../service/cc-service.service';

@Component({
  selector: 'app-cc-parent',
  templateUrl: './cc-parent.component.html',
  styleUrls: ['./cc-parent.component.css']
})
export class CcParentComponent implements OnInit {

  person = {
    name: 'Bob',
    age: 20
  };

  p = {
    name: '',
    age: null
  };

  constructor(private ccServiceService: CcServiceService) { }

  ngOnInit(): void {
    this.p = this.ccServiceService.p;
  }

  parentAddAge(data: number){
    this.person.age = data;
  }

}
