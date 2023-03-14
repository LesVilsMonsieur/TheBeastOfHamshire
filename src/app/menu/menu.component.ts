import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private globalService: GlobalService){}

  audioIntro = new Audio();
  audioClick = new Audio();
  audioDepart = new Audio();

  ngOnInit(): void {
    this.audioIntro.src = "../assets/Ouverture-Intro_90bpm_4-4_L25m_P0b.wav";
    this.audioClick.src = "../assets/SFX_Click-Menu.wav";
    this.audioDepart.src = "../assets/SFX_GO-TopDepart.wav";
    this.audioDepart.load();
    this.audioIntro.load();
    this.audioClick.load();
    this.audioIntro.play();
    
    this.globalService.isTraitorHelping = false;
    this.globalService.isFriendlyHelping = false;
  }

  goToMap20() {
    this.audioClick.play();
    this.audioDepart.play();

    this.globalService.player.positionX = 2;
    this.globalService.player.positionY = 0;

    this.audioIntro.pause();

  }

}
