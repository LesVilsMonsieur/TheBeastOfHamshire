import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map33',
  templateUrl: './map33.component.html',
  styleUrls: ['./map33.component.css']
})
export class Map33Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('music-exploration');
  }

  goToMap32() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 2;
    this.audio.footsteps();

  }

  goToMap34() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 4;
    this.audio.footsteps();

  }
  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }
}
