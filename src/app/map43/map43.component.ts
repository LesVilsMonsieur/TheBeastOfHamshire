import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map43',
  templateUrl: './map43.component.html',
  styleUrls: ['./map43.component.css']
})
export class Map43Component implements OnInit {
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

  goToMap44() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 4;
    this.audio.footsteps();

  }
  goToMap33() {
    this.globalService.player.positionX = 3;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }
}
