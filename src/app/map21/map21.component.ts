import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map21',
  templateUrl: './map21.component.html',
  styleUrls: ['./map21.component.css']
})
export class Map21Component implements OnInit {

  constructor(public globalService: GlobalService){}

  audio = inject(AudioService);

  //audio21 = new Audio();
  //audioThunder = new Audio();
  //audioPas1 = new Audio();
  //audioPas2 = new Audio();

  ngOnInit(): void {
    //this.audio21.src = "../assets/Music_Exploration.wav";
    //this.audioThunder.src = "../assets/SFX_Thunder2.wav";
    /*this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();*/
    //this.audioThunder.load();
    //this.audioThunder.play();
    //this.audio21.load();
    //this.audio21.play();

    this.audio.play('sfx-thunder');

    this.audio.play('music-exploration');

  }

  goToMap31() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 1;
    //this.audio21.pause();
    //this.audioPas1.play();
    //this.audioPas2.play();
    this.audio.footsteps();

  }

  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
   // this.audio21.pause();
    //this.audioPas1.play();
    //this.audioPas2.play();
    this.audio.footsteps();

  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
    //this.audio21.pause();
    //this.audioPas2.play();
    //this.audioPas1.play();
    this.audio.footsteps();

  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
    //this.audio21.pause();
    //this.audioPas2.play();
    //this.audioPas1.play();
    this.audio.footsteps();

  }

  combatChien() {
    this.globalService.currentEnemy = this.globalService.minion21;
    this.globalService.isInCombat = true;
    //this.audio21.pause();
    this.audio.pause('music-exploration');
  }

}
