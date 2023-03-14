import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-wanted-page',
  templateUrl: './wanted-page.component.html',
  styleUrls: ['./wanted-page.component.css']
})
export class WantedPageComponent {
  constructor(private _globalService: GlobalService){}
  back() {
    this._globalService.isReadingWanted = false;
  }
}
