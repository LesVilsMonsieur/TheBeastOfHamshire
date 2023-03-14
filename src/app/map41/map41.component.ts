import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map41',
  templateUrl: './map41.component.html',
  styleUrls: ['./map41.component.css']
})
export class Map41Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio41 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio41.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio41.load();
    this.audio41.play();
  }

  goToMap42() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 2;
    this.audio41.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap40() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 0;
    this.audio41.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }


}
