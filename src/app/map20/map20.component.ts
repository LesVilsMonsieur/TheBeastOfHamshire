import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map20',
  templateUrl: './map20.component.html',
  styleUrls: ['./map20.component.css']
})
export class Map20Component implements OnInit {

  constructor(public globalService: GlobalService){}

  audio20 = new Audio();
  audioPapier = new Audio();
  audioPas1 = new Audio();
  audioPas2 = new Audio();

  ngOnInit(): void {
    this.audio20.src = "../assets/Music_Exploration.wav";
    this.audioPapier.src = "../assets/SFX_Papier1.wav";
    this.audioPas1.src = "../assets/SFX_FootstepsDirt1.wav";
    this.audioPas2.src = "../assets/SFX_FootstepsLeaves2.wav";
    this.audioPas1.load();
    this.audioPas2.load();
    this.audioPapier.load();
    this.audio20.load();
    this.audio20.play();
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
    this.audio20.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap30() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 0;
    this.audio20.pause();
    this.audioPas1.play();
    this.audioPas2.play();
  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio20.pause();
    this.audioPas2.play();
    this.audioPas1.play();
  }

  openWanted() {
    this.audioPapier.play();
    console.log("allo")
    this.globalService.isReadingWanted = true;
    this.globalService.isWantedPageRead = true;
  }

  getHax() {
    this.globalService.isAxePickedUp = true;
    alert("Vous venez de récupérer une hache!")
  }
}
