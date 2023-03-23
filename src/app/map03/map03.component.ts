import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map03',
  templateUrl: './map03.component.html',
  styleUrls: ['./map03.component.css']
})
export class Map03Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('music-exploration');
  }

  goToMap02() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    this.audio.footsteps();

  }

  goToMap04() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 4;
    this.audio.footsteps();

  }
  goToMap13() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }
}
