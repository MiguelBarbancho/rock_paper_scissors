import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../sevices/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  public election_human;
  public election_cpu;
  public result_final;
  public cont: number;
  public win: number;
  public lose: number;
  public tie: number;
  public remote;
  public result: number;

  constructor(

    private _homeService: HomeService,
  ) {

    this.cont = 0;
    this.win = 0;
    this.lose = 0;
    this.tie = 0;
    this.remote = false;
  }

  ngOnInit() {
  }


  option(humanopt) {

    const result_text = ['TIE', 'WIN', 'LOSE'];
    const name_select = ['ROCK', 'PAPER', 'SCISSORS'];


    this.election_human = name_select[humanopt];

    // colum is human game and file is cpu game
    // 0 tie 1 win 2 lose
    const game = [
      [0, 1, 2],
      [2, 0, 1],
      [1, 2, 0]
    ];

    if (this.remote) {

      this._homeService.getOption().subscribe(
        response => {
          if (response) {
            this.election_cpu = name_select[response.cpuopt];
            this.result = game[humanopt][response.cpuopt];
            this.result_final = result_text[this.result];
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    } else if (!this.remote) {
      const cpuopt = Math.floor(Math.random() * (3));
      this.election_cpu = name_select[cpuopt];
      this.result = game[cpuopt][humanopt];
      this.result_final = result_text[this.result];
    } else {
      console.log('Error');
    }

    this.counter();
  }

  remoteChange() {
    if (this.remote) {
      this.remote = false;
    } else {
      this.remote = true;
    }
  }

  counter() {
    this.cont = this.cont + 1;

    if (this.result === 1) {
      this.win = this.win + 1;
    } else if (this.result === 2) {
      this.lose = this.lose + 1;
    } else {
      this.tie = this.tie + 1;
    }
  }

}
