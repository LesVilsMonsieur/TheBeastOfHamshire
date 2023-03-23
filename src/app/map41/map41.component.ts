import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map41',
  templateUrl: './map41.component.html',
  styleUrls: ['./map41.component.css']
})
export class Map41Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('music-exploration');
  }

  goToMap42() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 2;
    this.audio.footsteps();

  }

  goToMap40() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 0;
    this.audio.footsteps();

  }


}
