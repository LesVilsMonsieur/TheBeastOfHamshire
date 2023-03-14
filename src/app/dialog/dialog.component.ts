import { Component, OnInit } from '@angular/core';
import { Enemy } from 'src/assets/model';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  currentDialog : string = ''
  currentEnemy : Enemy = this._globalService.currentEnemy;
  myCurrentDialog : string = '';
  isSister = this._globalService.isSisterPageRead;
  isWanted = this._globalService.isWantedPageRead;

  audioCrayon = new Audio();
  audioDialogM = new Audio();
  audioDialogF = new Audio();

  constructor(public _globalService : GlobalService) {}

  ngOnInit(): void {
    this.audioCrayon.src = "/assets/SFX_Crayon1.wav";
    this.audioDialogM.src = "/assets/Music_Dialogue_Chasseur.wav"
    this.audioDialogF.src = "//assets/Music_Dialogue_ChasseurFeminin.wav"
    this.audioDialogM.load();
    this.audioDialogF.load();
    this.audioCrayon.load();
    this.audioCrayon.play();

    if(this.currentEnemy.id == 1) {
      this.audioDialogM.play();
      this.currentDialog = this.currentEnemy.name + " : Tu ne sera pas un obstacle à mon enrichissement, gamin...";
    }
    if(this.currentEnemy.id == 2) {
      this.audioDialogF.play();
      this.currentDialog = this.currentEnemy.name + " : Mon carreau saura trouver sa cible.";
    }
    
    this._globalService.isCombatTraitor = false;
    this._globalService.isCombatFriendly = false;
  }

  teamUp() {
    this.currentDialog = '';
    if(this.currentEnemy.id == 1) {
      this.audioCrayon.play();
      this.myCurrentDialog = "Moi : J'ai vu qu'il avait une prime de 500 livres pour tuer la bete, voudriez-vous faire équipe et partager cette somme?"
      setTimeout(() => {
        this.audioCrayon.play();
        if(this._globalService.isFriendlyHelping) {
          this.currentDialog = this.currentEnemy.name + " : Séparer la prime en trois parts ? Quelle idiotie gamin!"
        } else {
          
    this._globalService.isTraitorHelping =true;
          this.currentDialog = this.currentEnemy.name + " : Astucieux gamin... Je suis d'accord. On divise la prime à part égal.  On se rejoint sur le champ de bataille."
        }
      }, 1000)
      
    }
    if(this.currentEnemy.id == 2) {
      this._globalService.isFriendlyHelping =true;
      this.audioCrayon.play();
      this.myCurrentDialog = "Moi : Êtes-vous la chasseresse qui s'est fait enlever sa soeur par la bête? Voudriez-vous faire équipe?"
      setTimeout(() => {
        this.audioCrayon.play();
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
    this.audioDialogM.pause();
    this.audioDialogF.pause();
    
  }

  engage() {
    this.audioDialogM.pause();
    this.audioDialogF.pause();
    this._globalService.isInDialog = false;
    this._globalService.isInCombat = true;
  }
}
