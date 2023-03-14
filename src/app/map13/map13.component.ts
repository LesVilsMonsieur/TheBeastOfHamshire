import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map13',
  templateUrl: './map13.component.html',
  styleUrls: ['./map13.component.css']
})
export class Map13Component implements OnInit {
  constructor(public globalService: GlobalService){}

  audioThunder = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();
  audio13 = new Audio();

  ngOnInit(): void {
    this.audioThunder.src = "../assets/SFX_Thunder2.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audio13.src = "../assets/Music_Exploration.wav";
    this.audio13.load();
    this.audio13.play();
    this.audioPas1.load();
    this.audioPas2.load();
    this.audioThunder.load();
    this.audioThunder.play();
  }

  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
    this.audioPas2.play();
    this.audioPas1.play();
  }
  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
    this.audioPas2.play();
    this.audioPas1.play();
  }

  combatBoss() {
    this.globalService.currentEnemy = this.globalService.greatBeast;
    this.globalService.isInCombat = true;

  }
}
