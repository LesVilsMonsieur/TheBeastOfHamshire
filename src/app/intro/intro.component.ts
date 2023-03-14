import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {


  constructor(private globalService: GlobalService){}
  
  goToAcceuil(){
    this.globalService.player.positionX = 200;
    this.globalService.player.positionY = 200;
  }

}
