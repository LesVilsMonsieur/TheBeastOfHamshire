import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { GlobalService } from './global.service';
import { BehaviorSubject } from 'rxjs';
import { maps } from './maps/maps';
import { MapPosition } from './types/types';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1.5s ease-in', style({ opacity: 1 })),
]);
const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('750ms ease-out', style({ opacity: 0 })),
]);
const FadeIn = trigger('FadeIn', [enterTransition]);
const FadeOut = trigger('FadeOut', [exitTransition]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeIn, FadeOut],
})
export class AppComponent {
  currentMap$ = new BehaviorSubject(
    maps.find((x) => x.position[0] === 0 && x.position[1] === 0)
  );
  gameStarted = false;

  constructor(public globalService: GlobalService) {}

  changePosition(position: MapPosition) {
    this.currentMap$.next(
      maps.find(
        (x) => x.position[0] === position[0] && x.position[1] === position[1]
      )
    );
  }
}
