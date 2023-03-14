import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map33',
  templateUrl: './map33.component.html',
  styleUrls: ['./map33.component.css']
})
export class Map33Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio33 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio33.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio33.load();
    this.audio33.play();
  }

  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
    this.audio33.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap34() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 4;
    this.audio33.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio33.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
}
