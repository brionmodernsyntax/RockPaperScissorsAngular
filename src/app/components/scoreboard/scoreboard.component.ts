import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  @Input() result: string | undefined
  @Input() playerScore: number = 0;
  @Input() cpuScore: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
