import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map22',
  templateUrl: './map22.component.html',
  styleUrls: ['./map22.component.css']
})
export class Map22Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio22 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio22.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio22.load();
    this.audio22.play();
  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio22.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
    this.audio22.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
    this.audio22.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
    this.audio22.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
}
