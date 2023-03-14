import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map31',
  templateUrl: './map31.component.html',
  styleUrls: ['./map31.component.css']
})
export class Map31Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio31 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio31.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio31.load();
    this.audio31.play();
  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio31.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap30() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 0;
    this.audio31.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
    this.audio31.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }
}
