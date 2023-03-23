import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map01',
  templateUrl: './map01.component.html',
  styleUrls: ['./map01.component.css']
})
export class Map01Component implements OnInit {

  constructor(public globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('sfx-thunder');

    this.audio.play('music-exploration');
  }

  goToMap00() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 0;
    this.audio.footsteps();

  }
  goToMap11() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 1;
    this.audio.footsteps();

  }
  goToMap02() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 2;
    this.audio.footsteps();

  }

  combatFrangine() {
    this.globalService.currentEnemy = this.globalService.hunter2;
    this.globalService.isInDialog = true;
    this.audio.pause('music-exploration');
  }
}
