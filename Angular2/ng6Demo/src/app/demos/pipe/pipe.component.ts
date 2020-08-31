import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }
  money = 100;

  moneyList = [5, 25, 33, 41, 89, 90];

  newMoney;

  fetchMoney = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(200),
      1000
    );
  });

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addMoney(){
    if (this.newMoney){
      this.moneyList.push(this.newMoney);
      //
    }
  }
}
