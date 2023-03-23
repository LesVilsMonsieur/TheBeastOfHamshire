import { Component, OnInit, inject } from '@angular/core';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-victoire',
  templateUrl: './victoire.component.html',
  styleUrls: ['./victoire.component.css']
})
export class VictoireComponent implements OnInit {

  audio = inject(AudioService);

  ngOnInit(): void {
    /*this.audioFin.src = "/assets/Music_Fin.wav";
    this.audioFin.load();
    this.audioFin.play();*/
    this.audio.play('music-fin');
  }

  //audioFin = new Audio();


}
