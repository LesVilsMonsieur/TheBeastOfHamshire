import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map00',
  templateUrl: './map00.component.html',
  styleUrls: ['./map00.component.css']
})
export class Map00Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio00 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio00.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio00.load();
    this.audio00.play();
  }

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    this.audio00.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
    this.audio00.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

}
