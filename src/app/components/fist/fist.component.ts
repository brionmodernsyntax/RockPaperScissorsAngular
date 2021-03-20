import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fist',
  templateUrl: './fist.component.html',
  styleUrls: ['./fist.component.css']
})
export class FistComponent implements OnInit {
  @Input() playerIcon : number = 0;
  @Input() cpuIcon : number = 0;
  player = ["assets/rock-player.svg","assets/paper-player.svg","assets/scissors-player.svg"];
  cpu = ["assets/rock-cpu.svg","assets/paper-cpu.svg","assets/scissors-cpu.svg"];

  constructor() { }

  ngOnInit(): void {
  }

}
