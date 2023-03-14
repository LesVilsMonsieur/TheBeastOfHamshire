import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map10',
  templateUrl: './map10.component.html',
  styleUrls: ['./map10.component.css']
})
export class Map10Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio10 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio10.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio10.load();
    this.audio10.play();
    // if(this.audio10.ended){
    //   this.audio10.play();
    // }
  }

  goToMap00() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 0;
    this.audio10.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap20() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;
    this.audio10.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
    this.audio10.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

}
