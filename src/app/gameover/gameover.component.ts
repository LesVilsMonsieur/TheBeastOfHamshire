import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {

  constructor(public globalService: GlobalService){}

  audioFin = new Audio();
  audioMort = new Audio();

  ngOnInit(): void {
    this.audioFin.src = "../assets/Music_Fin.wav";
    this.audioMort.src = "../assets/Stinger_Mort.wav";
    this.audioMort.load();
    this.audioMort.play();
    this.audioFin.load();
    this.audioFin.play();
  }

  goToMenu(){
    this.globalService.player.positionX = 200;
    this.globalService.player.positionY = 200;

    this.globalService.player.currentHealth = 100;
    this.globalService.currentEnemy.id = 1;
    this.globalService.greatBeast.currentHealth = 100;
    this.globalService.hunter1.currentHealth = 200;
    this.globalService.hunter2.currentHealth = 100;
    this.globalService.isAxePickedUp = false;
    this.globalService.isCrowbarPickedUp = false;
    this.globalService.isFriendlyHelping = false;
    this.globalService.isGunPickedUp = false;
    this.globalService.isInCombat = false;
    this.globalService.isInDialog = false;
    this.globalService.isKeyPickedUp = false;
    this.globalService.isPlayerDefending = false;
    this.globalService.isPlayerTurn = false;
    this.globalService.isSisterPageRead = false;
    this.globalService.isTraitorHelping = false;
    this.globalService.isWantedPageRead = false;

    this.audioFin.pause();
  }
}
