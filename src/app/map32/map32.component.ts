import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map32',
  templateUrl: './map32.component.html',
  styleUrls: ['./map32.component.css']
})
export class Map32Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  //audio32 = new Audio();
  //audioPas1 = new Audio();
  //audioPas2 = new Audio();

  ngOnInit(): void {
    //this.audio32.src = "../assets/Music_Exploration.wav";
    /*this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();*/
    //this.audio32.load();
   // this.audio32.play();

    this.audio.play('music-exploration');

  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
    //this.audio32.pause();
    //this.audioPas1.play();
    //this.audioPas2.play();
    this.audio.footsteps();

  }

  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
    //this.audio32.pause();
    //this.audioPas1.play();
    //this.audioPas2.play();
    this.audio.footsteps();

  }
  goToMap31() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 1;
    //this.audio32.pause();
    //this.audioPas2.play();
    //this.audioPas1.play();
    this.audio.footsteps();

  }
}
