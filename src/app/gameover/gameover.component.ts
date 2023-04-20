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

    this.globalService.player.currentHealth = this.globalService.player.maxHealth;
    this.globalService.player.damage = 10;
    this.globalService.currentEnemy === this.globalService.hunter1;
    this.globalService.greatBeast.currentHealth = this.globalService.greatBeast.maxHealth;
    this.globalService.hunter1.currentHealth = this.globalService.hunter1.maxHealth;
    this.globalService.hunter2.currentHealth = this.globalService.hunter2.maxHealth;
    this.globalService.minion21.currentHealth = this.globalService.minion21.maxHealth;
    this.globalService.minion34.maxHealth = this.globalService.minion34.maxHealth;
    this.globalService.isFriendlyHelping = false;
    this.globalService.isInCombat = false;
    this.globalService.isInDialog = false;
    this.globalService.isPlayerTurn = false;
    this.globalService.isSisterPageRead = false;
    this.globalService.isTraitorHelping = false;
    this.globalService.isWantedPageRead = false;
    this.globalService.hunter1.isDefeated = false;
    this.globalService.hunter2.isDefeated = false;
    this.globalService.minion21.isDefeated = false;
    this.globalService.minion34.isDefeated = false;
    this.globalService.greatBeast.isDefeated = false;
    this.globalService.hasPickedUpHax = false;
    this.globalService.trahison = false;
    this.globalService.currentEnemy.finalQuote = "La grande bête de Hamshire vous a terrassée. Qui pourra mettre fin à la nuit éternelle ?  Peut-être qu'une meilleure arme ou l'aide de quelqu'un aurait pu vous aider"
    this.globalService.player.weaponPickedUp = [this.globalService.empty]

    this.audio.pause('stinger-mort');
  }
}
