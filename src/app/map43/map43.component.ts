import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map43',
  templateUrl: './map43.component.html',
  styleUrls: ['./map43.component.css']
})
export class Map43Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio43 = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio43.src = "../assets/Music_Exploration.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audio43.load();
    this.audio43.play();
  }

  goToMap42() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 2;
    this.audio43.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap44() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 4;
    this.audio43.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }
  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
    this.audio43.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }
}
