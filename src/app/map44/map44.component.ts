import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map44',
  templateUrl: './map44.component.html',
  styleUrls: ['./map44.component.css']
})
export class Map44Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio44 = new Audio();
  audioThunder = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio44.src = "../assets/Music_Exploration.wav";
    this.audioThunder.src = "../assets/SFX_Thunder2.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audioThunder.load();
    this.audioThunder.play();
    this.audio44.load();
    this.audio44.play();
  }

  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio44.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap34() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 4;
    this.audio44.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
}
