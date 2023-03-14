import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map23',
  templateUrl: './map23.component.html',
  styleUrls: ['./map23.component.css']
})
export class Map23Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio23 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio23.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio23.load();
    this.audio23.play();
  }

  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
    this.audio23.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
    this.audio23.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap24() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 4;
    this.audio23.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }


}
