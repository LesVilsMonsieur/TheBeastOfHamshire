import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map20',
  templateUrl: './map20.component.html',
  styleUrls: ['./map20.component.css']
})
export class Map20Component implements OnInit {

  constructor(public globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('music-exploration');
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
    this.audio.footsteps();
  }

  goToMap30() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 0;
    this.audio.footsteps();

  }

  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio.footsteps();

  }

  openWanted() {
    this.audio.play('sfx-paper');
    this.globalService.isReadingWanted = true;
    this.globalService.isWantedPageRead = true;
  }

  getHax() {
    this.globalService.player.weaponPickedUp.push(this.globalService.axe);
    alert("Vous venez de récupérer une hache!")
  }
}
