import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map34',
  templateUrl: './map34.component.html',
  styleUrls: ['./map34.component.css']
})
export class Map34Component implements OnInit {
  constructor(public globalService: GlobalService){}

  audio34 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio34.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio34.load();
    this.audio34.play();
  }

  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
    this.audio34.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap44() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 4;
    this.audio34.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  combatChien() {
    this.globalService.currentEnemy = this.globalService.minion34;
    this.globalService.isInCombat = true;
    this.audio34.pause();
  }
}
