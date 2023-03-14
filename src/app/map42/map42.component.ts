import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map42',
  templateUrl: './map42.component.html',
  styleUrls: ['./map42.component.css']
})
export class Map42Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio42 = new Audio();
  audioThunder = new Audio();
  audioPapier = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio42.src = "../assets/Music_Exploration.wav";
    this.audioThunder.src = "../assets/SFX_Thunder2.wav";
    this.audioPapier.src = "../assets/SFX_Papier1.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audioPapier.load();
    this.audioThunder.load();
    this.audioThunder.play();
    this.audio42.load();
    this.audio42.play();
  }

  goToMap41() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 1;
    this.audio42.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio42.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  openJournal() {
    this.audioPapier.play();
    this.globalService.isReadingSister = true;
    this.globalService.isSisterPageRead = true;


  }
}
