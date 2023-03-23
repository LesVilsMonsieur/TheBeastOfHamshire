import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map04',
  templateUrl: './map04.component.html',
  styleUrls: ['./map04.component.css']
})
export class Map04Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('music-exploration');
  }

  goToMap14() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 4;
    this.audio.footsteps();

  }

  goToMap03() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }
}
