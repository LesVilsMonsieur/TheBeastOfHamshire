import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-map42',
  templateUrl: './map42.component.html',
  styleUrls: ['./map42.component.css']
})
export class Map42Component implements OnInit {
  constructor(private globalService: GlobalService){}

  audio42 = new Audio();

  ngOnInit(): void {
    this.audio42.src = "../assets/Music-Exploration2.wav";
    this.audio42.load();
    this.audio42.play();
  }

  goToMap41() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 1;
    this.audio42.pause();
  }

  goToMap43() {
    this.globalService.player.positionX = 4;
    this.globalService.player.positionY = 3;
    this.audio42.pause();
  }

  openJournal() {
    alert("Vous trouvez le HamShire's Time : 'Le porcin infernal à encore frapper la nuit dernière.  Il a emporter 4 victimes dans sa furreur, dont Élisabeth,la soeur d'une chasserèsse local'")
    this.globalService.isSisterPageRead = true;

    
  }
}
