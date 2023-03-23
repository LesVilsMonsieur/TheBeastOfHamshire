import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map40',
  templateUrl: './map40.component.html',
  styleUrls: ['./map40.component.css']
})
export class Map40Component implements OnInit {
  constructor(public globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('sfx-thunder');

    this.audio.play('music-exploration');
  }

  goToMap41() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 1;
    this.audio.footsteps();

  }

  combatFrangin() {
    this.globalService.currentEnemy = this.globalService.hunter1;
    this.globalService.isInDialog = true;
   this.audio.pause('music-exploration');
  }

}
