import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map03',
  templateUrl: './map03.component.html',
  styleUrls: ['./map03.component.css']
})
export class Map03Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio03 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio03.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio03.load();
    this.audio03.play();
  }

  goToMap02() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    this.audio03.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap04() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 4;
    this.audio03.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
    this.audio03.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }
}
