import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map44',
  templateUrl: './map44.component.html',
  styleUrls: ['./map44.component.css']
})
export class Map44Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('sfx-thunder');

    this.audio.play('music-exploration');
  }

  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }

  goToMap34() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 4;
    this.audio.footsteps();

  }
}
