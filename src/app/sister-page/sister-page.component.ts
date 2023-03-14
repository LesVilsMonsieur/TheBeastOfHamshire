import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-sister-page',
  templateUrl: './sister-page.component.html',
  styleUrls: ['./sister-page.component.css']
})
export class SisterPageComponent {
  constructor(private _globalService : GlobalService){}
  back() {
    this._globalService.isReadingSister = false;
  }
}
