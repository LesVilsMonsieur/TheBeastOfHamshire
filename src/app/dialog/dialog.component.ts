import { Component, OnInit, inject } from '@angular/core';
import { Enemy } from 'src/assets/model';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  audio = inject(AudioService);

  currentDialog : string = ''
  currentEnemy : Enemy = this._globalService.currentEnemy;
  myCurrentDialog : string = '';
  isSister = this._globalService.isSisterPageRead;
  isWanted = this._globalService.isWantedPageRead;

  constructor(public _globalService : GlobalService) {}

  ngOnInit(): void {
    this.audio.play('sfx-crayon');


      // Dialogue avec Jhon et SANS alliance
    if(this.currentEnemy.id == 1 && !this._globalService.isTraitorHelping) {
      this.audio.play('music-dialog-hunter1');
      this.currentDialog = this.currentEnemy.name + " : Tu ne sera pas un obstacle à mon enrichissement, gamin...";

      this._globalService.isCombatTraitor = false;
    }


      // Dialogue avec Jhon et AVEC alliance
    if(this.currentEnemy.id == 1 &&  this._globalService.isTraitorHelping) {
      this.audio.play('music-dialog-hunter1');
      this.currentDialog = this.currentEnemy.name + " : On se rejoint sur le champ de bataille gamin, question de terrasser la bête et d'empocher la prime.";

      this._globalService.isCombatTraitor = false;
    }


      // Dialogue avec Louise et SANS alliance
    if(this.currentEnemy.id == 2 && !this._globalService.isFriendlyHelping) {
      this.audio.play('music-dialog-hunter2');
      this.currentDialog = this.currentEnemy.name + " : Mon carreau saura trouver sa cible.";

      this._globalService.isCombatFriendly = false;
    }

     // Dialogue avec Louise et AVEC alliance
    if(this.currentEnemy.id == 2 && this._globalService.isFriendlyHelping) {
      this.audio.play('music-dialog-hunter2');
      this.currentDialog = this.currentEnemy.name + " : Allons pourfendre la bête et venger le souvenir de ma soeur.";

      this._globalService.isCombatFriendly = false;
    }


  }

  teamUp() {
    this.currentDialog = '';
    if(this.currentEnemy.id == 1) {
      this.audio.play('sfx-crayon');
      this.myCurrentDialog = "Moi : J'ai vu qu'il y avait une prime de 500 livres pour tuer la bête, voudriez-vous faire équipe et partager cette somme?"
      setTimeout(() => {
        this.audio.play('sfx-crayon');
        if(this._globalService.isFriendlyHelping) {
          this.currentDialog = this.currentEnemy.name + " : Séparer la prime en trois parts ? Quelle idiotie gamin!"
        } else {

    this._globalService.isTraitorHelping =true;
          this.currentDialog = this.currentEnemy.name + " : Astucieux gamin... Je suis d'accord. On divise la prime à part égale.  On se rejoint sur le champ de bataille."
        }
      }, 1000)

    }
    if(this.currentEnemy.id == 2) {
      this._globalService.isFriendlyHelping =true;
      this.audio.play('sfx-crayon');
      this.myCurrentDialog = "Moi : Êtes-vous la chasseresse qui s'est fait enlever sa soeur par la bête? Voudriez-vous faire équipe?"
      setTimeout(() => {
        this.audio.play('sfx-crayon');
        if(this._globalService.isTraitorHelping) {
          this.currentDialog = this.currentEnemy.name + " : Faire équipe avec un assassin comme lui ? JAMAIS !"
        } else {

      this._globalService.isFriendlyHelping =true;
          this.currentDialog = this.currentEnemy.name + " : Faire équipe ? Tout pour sortir de cet enfer et venger ma soeur."
        }
      }, 1000)
    }
  }

  quit() {
    this._globalService.isInDialog = false;
    this.audio.pause('music-dialog-hunter1');
    this.audio.pause('music-dialog-hunter2');

  }

  engage() {
    this.audio.pause('music-dialog-hunter1');
    this.audio.pause('music-dialog-hunter2');
    this._globalService.isInDialog = false;
    this._globalService.isInCombat = true;
  }
}
