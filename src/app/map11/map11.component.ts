import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map11',
  templateUrl: './map11.component.html',
  styleUrls: ['./map11.component.css']
})
export class Map11Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  //audio11 = new Audio();
  //audioPas1 = new Audio();
  //audioPas2 = new Audio();

  ngOnInit(): void {
    //this.audio11.src = "../assets/Music_Exploration.wav";
    /*this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();*/
    //this.audio11.load();
    //this.audio11.play();

    this.audio.play('music-exploration');

  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
    //this.audio11.pause();
    //this.audioPas1.play();
    //this.audioPas2.play();
    this.audio.footsteps();

  }

  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
    //this.audio11.pause();
    //this.audioPas2.play();
    //this.audioPas1.play();
    this.audio.footsteps();

  }

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    //this.audio11.pause();
    //this.audioPas1.play();
    //this.audioPas2.play();
    this.audio.footsteps();

  }
  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    //this.audio11.pause();
   // this.audioPas2.play();
    //this.audioPas1.play();
    this.audio.footsteps();

  }

}
