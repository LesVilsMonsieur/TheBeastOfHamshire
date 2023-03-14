import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map01',
  templateUrl: './map01.component.html',
  styleUrls: ['./map01.component.css']
})
export class Map01Component implements OnInit {

  constructor(public globalService: GlobalService){}

  audio01 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio01.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio01.load();
    this.audio01.play();
    // if(this.globalService.audioExploration.ended){
    //   this.globalService.audioExploration.play();
    // }
  }

  goToMap00() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 0;
    this.audio01.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
    this.audio01.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
  goToMap02() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 2;
    this.audio01.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  combatFrangine() {
    this.globalService.currentEnemy = this.globalService.hunter2;
    this.globalService.isInDialog = true;
  }
}
