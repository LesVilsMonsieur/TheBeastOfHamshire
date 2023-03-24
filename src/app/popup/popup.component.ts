import { Component, inject, Inject } from '@angular/core';
import {MatDialog, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Enemy, Weapon,  } from 'src/assets/model';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Weapon){}
}
