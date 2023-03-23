import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map34',
  templateUrl: './map34.component.html',
  styleUrls: ['./map34.component.css']
})
export class Map34Component implements OnInit {
  constructor(public globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('music-exploration');
  }

  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }

  goToMap44() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 4;
    this.audio.footsteps();

  }

  combatChien() {
    this.globalService.currentEnemy = this.globalService.minion34;
    this.globalService.isInCombat = true;
    this.audio.pause('music-exploration');
  }
}
