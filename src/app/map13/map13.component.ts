import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map13',
  templateUrl: './map13.component.html',
  styleUrls: ['./map13.component.css']
})
export class Map13Component implements OnInit {
  constructor(public globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('sfx-thunder');

    this.audio.play('music-exploration');
  }

  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }
  goToMap23() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }

  combatBoss() {
    this.globalService.currentEnemy = this.globalService.greatBeast;
    this.globalService.isInCombat = true;
    this.audio.pause('music-exploration');
  }
}
