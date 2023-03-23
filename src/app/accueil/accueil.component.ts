import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private globalService: GlobalService){}

  audio = inject(AudioService);

  //readonly audioOuverture = new Audio("/assets/Music_OuvertureMenu.wav");

  ngOnInit(): void {
    //this.audioOuverture.load();
    //this.audioOuverture.play();
    this.audio.play('music-menu');
  }

  goToMenu(){
    this.globalService.player.positionX = 100;
    this.globalService.player.positionY = 100;
    //this.audioOuverture.pause();
  }

}
