import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private globalService: GlobalService){}

  audioOuverture = new Audio();

  ngOnInit(): void {
    this.audioOuverture.src = "/assets/Music_OuvertureMenu.wav";
    this.audioOuverture.load();
    this.audioOuverture.play();
  }

  goToMenu(){
    this.globalService.player.positionX = 100;
    this.globalService.player.positionY = 100;
    this.audioOuverture.pause();

  }

}
