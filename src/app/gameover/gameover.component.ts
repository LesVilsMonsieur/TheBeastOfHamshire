import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  constructor(public globalService: GlobalService){}

  audio = inject(AudioService);

  ngOnInit(): void {
    this.audio.play('stinger-mort');
  }

  goToMenu(){
    this.globalService.player.positionX = 200;
    this.globalService.player.positionY = 200;

    this.globalService.player.currentHealth = 100;
    this.globalService.currentEnemy.id = 1;
    this.globalService.greatBeast.currentHealth = 100;
    this.globalService.hunter1.currentHealth = 200;
    this.globalService.hunter2.currentHealth = 100;
    this.globalService.isFriendlyHelping = false;
    this.globalService.isInCombat = false;
    this.globalService.isInDialog = false;
    this.globalService.isPlayerTurn = false;
    this.globalService.isSisterPageRead = false;
    this.globalService.isTraitorHelping = false;
    this.globalService.isWantedPageRead = false;

    this.audio.pause('stinger-mort');
  }
}
