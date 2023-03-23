import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map42',
  templateUrl: './map42.component.html',
  styleUrls: ['./map42.component.css']
})
export class Map42Component implements OnInit {
  constructor(private globalService: GlobalService){}

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

  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio.footsteps();

  }

  openJournal() {
    this.audio.play('sfx-paper');
    this.globalService.isReadingSister = true;
    this.globalService.isSisterPageRead = true;


  }
}
