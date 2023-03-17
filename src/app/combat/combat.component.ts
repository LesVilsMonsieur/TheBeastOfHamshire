import { Component, OnInit} from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  constructor(public _globalService : GlobalService) {}

  audioCombatChasseur = new Audio();
  audioCombatChasseresse = new Audio();
  audioShotGun = new Audio();
  audioCombatBoss = new Audio();
  //audioCombatMinion = new Audio();
  audioCochon = new Audio();

  ngOnInit(): void {
    this._globalService.player.currentHealth = 100;

    this.audioCombatChasseur.src = "../assets/Music_Combat_Chasseur.wav";
    this.audioCombatChasseresse.src = "../assets/Music_Combat_ChasseurFeminin.wav";
    this.audioShotGun.src = "../assets/SFX_Shotgun.wav";
    this.audioCombatBoss.src = "../assets/Music_Combat_BossFinal.wav";
    this.audioCochon.src = "../assets/SFX_Cochon2.wav";
    this.audioCochon.load();
    this.audioCombatBoss.load();
    this.audioShotGun.load();
    this.audioCombatChasseur.load();
    this.audioCombatChasseresse.load();

    if(this.currentEnemy.id === 1){
      this.audioCombatChasseur.play();
    } else if(this.currentEnemy.id === 2){
      this.audioCombatChasseresse.play();
    } else if(this.currentEnemy.id === 4 || this.currentEnemy.id === 5) {
      this.audioCombatChasseresse.play();
    } else if(this.currentEnemy.id === 3) {
      this.audioCochon.play();
      this.audioCombatBoss.play();
    }
    if(this._globalService.isFriendlyHelping === true || this._globalService.isTraitorHelping === true){
      this.player.damage *= 2;
    }
  }

  currentEnemy = this._globalService.currentEnemy;
  player = this._globalService.player;
  weaponList = this._globalService.player.weaponPickedUp;
  isPlayerTurn = true;
  isDefending = false;

  switchTurn() {
    this.isPlayerTurn = !this.isPlayerTurn;

    if(!this.isPlayerTurn) {
      setTimeout(() => {
        this.enemyAttack();
      }, 750);
    }
  }

  whichEnemy() {
    switch(this.currentEnemy.id) {
      case 1 : {
        this._globalService.currentEnemy.finalQuote = "Vous avez été tué par le chasseur. En regardant votre cadavre atteindre le sol il vous lance :  Un peu trop ambitieux pour un gamin.";
        this._globalService.player.weaponPickedUp.push(this._globalService.gun);
        this._globalService.isCombatTraitor = false;
        setTimeout(() => {
          alert("Vous venez de récuperer le fusil de Jhon");
        }, 750);
      }
      break;
      case 2 : {
        this._globalService.isCombatFriendly = false;
      }
      break;
      case 3 : {
        this._globalService.isCombatBeast = false;
        this._globalService.player.positionX = 700;
        this._globalService.player.positionY = 700;
      }
      break;
      case 4 : {
        this._globalService.isCombatMinion21 = false;
      }
      break;
      case 5 : {
        this._globalService.isCombatMinion34 = false;
      }
      break;
    }
  }

  attackEnemy() {
    if(this.isPlayerTurn) {
      this.currentEnemy.currentHealth -= this.player.damage
    }

    if(this.currentEnemy.currentHealth <= 0) {
      this.leaveCombat();
      this.audioCombatChasseur.pause();
      this.audioCombatChasseresse.pause();
    }

    this.switchTurn();
  }

  enemyAttack() {
    if(this.isDefending == true) {
      this.player.currentHealth -= (this.currentEnemy.damage / 2)
      this.isDefending = false;
    } else {
      this.player.currentHealth -= this.currentEnemy.damage
    }
    
    if(this.player.currentHealth <= 0) {
      this.player.dead = true;
      this._globalService.isInCombat = false;
      this.audioCombatChasseur.pause();
      this.audioCombatChasseresse.pause();
      this.audioCombatBoss.pause();
    }
    if(this.player.dead === true) {
      this.player.positionX = 500;
      this.player.positionY = 500;
    }

    setTimeout(() => {
      this.switchTurn();
    }, 500)
  }

  switchWeapon() {
    this._globalService.currentWeaponIndex++;

    if(this._globalService.currentWeaponIndex === this.weaponList.length) {
      this._globalService.currentWeaponIndex = 0;
    }

    if(this.weaponList.length === 1) {
      alert("Vous n'avez pas d'autre arme à équiper")
    } else {
      alert("Vous venez d'équiper " + this.weaponList[this._globalService.currentWeaponIndex].name);
      this._globalService.player.damage = this.weaponList[this._globalService.currentWeaponIndex].damage;
    }
  }

  defend() {
    this.isDefending = true;

    setTimeout(() => {
      this.switchTurn();
    }, 250)
  }

  leaveCombat() {
    this._globalService.isInCombat = false;
    this._globalService.currentEnemy.currentHealth = this._globalService.currentEnemy.maxHealth;
    this.whichEnemy();
  }
}
