import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-victoire',
  templateUrl: './victoire.component.html',
  styleUrls: ['./victoire.component.css']
})
export class VictoireComponent implements OnInit {
  ngOnInit(): void {
    this.audioFin.src = "/assets/Music_Fin.wav";
    this.audioFin.load();
    this.audioFin.play();
  }

  audioFin = new Audio();


}
