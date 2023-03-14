import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map40',
  templateUrl: './map40.component.html',
  styleUrls: ['./map40.component.css']
})
export class Map40Component implements OnInit {
  constructor(public globalService: GlobalService){}

  audio40 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio40.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio40.load();
    this.audio40.play();
  }

  goToMap41() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 1;
    this.audio40.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  combatFrangin() {
    this.globalService.currentEnemy = this.globalService.hunter1;
    this.globalService.isInDialog = true;
    this.audio40.pause();
  }

}
