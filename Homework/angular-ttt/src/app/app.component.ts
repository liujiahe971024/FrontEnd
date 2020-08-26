import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'angular-ttt';
  text = 'Player O on move';
  private continuePlay = true;
  private turn = 1;
  private player1 = [];
  private player2 = [];
  private count = 0;
  private winBoard = [[1,2,3],[1,4,7],[1,5,9],
    [2,5,8],[3,5,7],[3,6,9],[4,5,6],[7,8,9]];
  constructor() {}
  ngOnInit(): void {

  }
  clickBox(event): void{
    if (!event.target.classList.contains('x-mark') &&
      !event.target.classList.contains('o-mark') &&
      this.continuePlay === true){
      if (this.turn == 1){
        event.target.classList.add('o-mark');
        this.update(this.player1, event.target.id);
        this.turn = 2;
        console.log(this.player1);
        this.text = 'Player X on move';
      }
      else if (this.turn == 2) {
        event.target.classList.add('x-mark');
        this.update(this.player2, event.target.id);
        this.turn = 1;
        console.log(this.player2);
        this.text = 'Player O on move';
      }
      this.count++;
      this.check();
    }
  }
  check(){
    let p1 = [];
    let p2 = [];
    this.player1.sort();
    this.player2.sort();
    for (let i = 0; i < this.player1.length; i++)
      for(let j = i+1; j < this.player1.length; j++)
        for(let h = j+1; h < this.player1.length; h++)
          p1.push([this.player1[i],this.player1[j],this.player1[h]]);
    for (let i = 0; i < this.player2.length; i++)
      for(let j = i+1; j < this.player2.length; j++)
        for(let h = j+1; h < this.player2.length; h++)
          p2.push([this.player2[i],this.player2[j],this.player2[h]])
    let test = function(p, w){
      return w.some(function(v){
        return p.some(function(t){
          return JSON.stringify(v) == JSON.stringify(t);
        });
      });};
    if (test(p1, this.winBoard)){
      this.text = 'Player O Wins!';
      this.continuePlay = false;
    }
    else if (test(p2, this.winBoard)){
      this.text = 'Player X Wins!';
      this.continuePlay = false;
    }
    else if (this.count == 9){
      this.text = 'It\'s a Draw';
      this.continuePlay = false;
    }
  }
  // tslint:disable-next-line:typedef
  update(player, id){
    switch (id){
      case 'box1':
        player.push(1);
        break;
      case 'box2':
        player.push(2);
        break;
      case 'box3':
        player.push(3);
        break;
      case 'box4':
        player.push(4);
        break;
      case 'box5':
        player.push(5);
        break;
      case 'box6':
        player.push(6);
        break;
      case 'box7':
        player.push(7);
        break;
      case 'box8':
        player.push(8);
        break;
      case 'box9':
        player.push(9);
        break;
    }
  }
  // tslint:disable-next-line:typedef
  reset(){
    let x = document.querySelectorAll('.o-mark');
    for (let i = 0; i < x.length; i++) x[i].classList.remove('o-mark');
    let y = document.querySelectorAll('.x-mark');
    for (let j = 0; j < y.length; j++) y[j].classList.remove('x-mark');
    this.turn = 1;
    this.count = 0;
    this.player1 = [];
    this.player2 = [];
    this.continuePlay = true;
    this.text = 'Player O on move';
  }
}
