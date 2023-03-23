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
    this.audio.play('music-fin');
  }

}
