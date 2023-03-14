import { Component } from '@angular/core';
import { trigger, transition, style, animate} from '@angular/animations';
import { GlobalService } from './global.service';


const enterTransition = transition(':enter', [
style({
  opacity: 0
 }),
 animate('1.5s ease-in' , style({opacity: 1})),
])
const exitTransition = transition(':leave', [
  style({
    opacity: 1
   }),
   animate('750ms ease-out' , style({opacity: 0})),
  ])
const FadeIn = trigger('FadeIn', [enterTransition]);
const FadeOut = trigger('FadeOut', [exitTransition]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeIn, FadeOut]
})
export class AppComponent {
  title = 'my-app';

  constructor(public globalService: GlobalService) {}
}
