import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map11',
  templateUrl: './map11.component.html',
  styleUrls: ['./map11.component.css']
})
export class Map11Component implements OnInit {

  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('music-exploration');
  }

  goToMap10() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 0;
    this.audio.footsteps();

  }

  goToMap12() {
    this.globalService.player.positionX = 1;
    this.globalService.player.positionY = 2;
    this.audio.footsteps();

  }

  goToMap01() {
    this.globalService.player.positionX = 0;
    this.globalService.player.positionY = 1;
    this.audio.footsteps();

  }
  goToMap21() {
    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 1;
    this.audio.footsteps();

  }

}
