import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map02',
  templateUrl: './map02.component.html',
  styleUrls: ['./map02.component.css']
})
export class Map02Component implements OnInit {

  constructor(public globalService: GlobalService){}

  audio02 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio02.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio02.load();
    this.audio02.play();
  }

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    this.audio02.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }
  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
    this.audio02.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
    this.audio02.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
}
