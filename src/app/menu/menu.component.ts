import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.globalService.isTraitorHelping = false;
    this.globalService.isFriendlyHelping = false;
  }

  goToMap20() {
    this.audio.play('sfx-click');
    this.audio.play('sfx-depart');

    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;

    this.audio.pause('music-menu');

  }

}
