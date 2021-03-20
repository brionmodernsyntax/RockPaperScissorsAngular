import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rock-paper-scissors';
  selected: number = 0;
  result: string | undefined;
  playerScore: number = 0;
  cpuScore: number = 0;
  cpu: number = 0;

  calculate(fistType: number): void {
    this.selected = fistType;
    this.cpu = Math.floor(Math.random() * 3);

    switch (this.selected) {
      case 0:
        if (this.cpu == 1) {
          this.result = 'Loss!';
          this.cpuScore++;
        } else if (this.cpu == 2) {
          this.result = 'Win!';
          this.playerScore++;
        } else {
          this.result = 'Tie!';
        }
        break;
      case 1:
        if (this.cpu == 2) {
          this.result = 'Loss!';
          this.cpuScore++;
        } else if (this.cpu == 0) {
          this.result = 'Win!';
          this.playerScore++;
        } else {
          this.result = 'Tie!';
        }
        break;
      case 2:
        if (this.cpu == 0) {
          this.result = 'Loss!';
          this.cpuScore++;
        } else if (this.cpu == 1) {
          this.result = 'Win!';
          this.playerScore++;
        } else {
          this.result = 'Tie!';
        }
        break;
      default:
        break;
    }
  }
}
