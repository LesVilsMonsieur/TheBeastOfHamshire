import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map23',
  templateUrl: './map23.component.html',
  styleUrls: ['./map23.component.css']
})
export class Map23Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('music-exploration');
  }

  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }

  goToMap22() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 2;
    this.audio.footsteps();

  }

  goToMap24() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 4;
    this.audio.footsteps();

  }


}
