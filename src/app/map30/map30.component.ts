import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map30',
  templateUrl: './map30.component.html',
  styleUrls: ['./map30.component.css']
})
export class Map30Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  //audio30 = new Audio();
  //audioPas1 = new Audio();
  //audioPas2 = new Audio();

  ngOnInit(): void {
    //this.audio30.src = "../assets/Music_Exploration.wav";
    /*this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();*/
    //this.audio30.load();
    //this.audio30.play();

    this.audio.play('music-exploration');

  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
   // this.audio30.pause();
    //this.audioPas1.play();
    //this.audioPas2.play();
    this.audio.footsteps();

  }

  goToMap31() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 1;
   // this.audio30.pause();
    //this.audioPas2.play();
    //this.audioPas1.play();
    this.audio.footsteps();

  }
}
