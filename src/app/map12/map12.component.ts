import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map12',
  templateUrl: './map12.component.html',
  styleUrls: ['./map12.component.css']
})
export class Map12Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio12 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio12.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio12.load();
    this.audio12.play();
  }

  goToMap02() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 2;
    this.audio12.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
    this.audio12.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }
  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
    this.audio12.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
    this.audio12.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }
}
