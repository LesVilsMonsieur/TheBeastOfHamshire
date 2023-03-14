import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map24',
  templateUrl: './map24.component.html',
  styleUrls: ['./map24.component.css']
})
export class Map24Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio24 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio24.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio24.load();
    this.audio24.play();
  }

  goToMap14() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 4;
    this.audio24.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
    this.audio24.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }
}
