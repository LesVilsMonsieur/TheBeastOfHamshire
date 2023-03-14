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
  weaponList = this._globalService.weaponList;
  weaponIndex = 0;
  playerTurn = this._globalService.isPlayerTurn;
  playerAttacking: boolean = false;
  enemyAttacking: boolean = false;

  playerTurnCheck() {
    if(this.playerTurn == true) {
      return false
    } else {
      return true
    }
  }

  attackEnemy() {
    
    this.enemyAttacking = false;
    
    if(this.playerTurn == true) {
      this.currentEnemy.currentHealth -= this.player.damage;
    }

    

    if(this.currentEnemy.currentHealth <= 0) {
      this._globalService.player.currentHealth = 100;
      this._globalService.isInCombat = false;
      this.audioCombatChasseur.pause();
      this.audioCombatChasseresse.pause();
      if(this.currentEnemy.id == 1) {
        this._globalService.isGunPickedUp = true;
        this._globalService.isCombatTraitor = false;
      }
      if(this.currentEnemy.id == 2) {
        this._globalService.isCombatFriendly = false;
      }
      if(this.currentEnemy.id == 3) {
        this._globalService.isCombatBeast = false;
        this._globalService.player.positionX = 700;
        this._globalService.player.positionY = 700;
      }
      if(this.currentEnemy.id == 4) {
        this._globalService.isCombatMinion21 = false;
      }
      if(this.currentEnemy.id == 5) {
        this._globalService.isCombatMinion34 = false;
      }

    }
    this.playerAttacking = true;

    this.playerTurn = false;
    this.timeoutDegat();
    if (this._globalService.currentEnemy.currentHealth > 0)
    {
      this.timeOutCombat();
    }
  }

  timeoutDegat() {
    setTimeout(() => {
      this.changeAttack();
    }, 250)
  }

  changeAttack() {
    this.playerAttacking = false;
  }

  timeOutCombat() {
    if(this.playerTurn == false) {
      setTimeout(() => {
        this.enemyAttack();
      }, 750);
    }
  }

  enemyAttack() {
    if(this.currentEnemy.currentHealth <= 50 && this._globalService.isTraitorHelping === true && this.currentEnemy.id === 3) {
      this._globalService.isCombatBeast = false;
      this._globalService.isInCombat = false;
      this._globalService.player.positionX = 500;
      this._globalService.player.positionY = 500;
      alert("Jhon vous a trahi")
      this._globalService.finalQuote = "Aucune chance que je sépare la prime, Gamin!"
    }
    this.playerAttacking = false;
    
    if(this.playerTurn == false) {
      if(this._globalService.isPlayerDefending == true) {
        this.player.currentHealth -= (this.currentEnemy.damage / 2)
        this._globalService.isPlayerDefending = false;
      } else {
        this.player.currentHealth -= this.currentEnemy.damage
      }
    }

    if(this.currentEnemy.id === 1) {
      this.audioShotGun.play();
    }

    this.enemyAttacking = true;

    if(this.player.currentHealth <= 0) {
      this.player.mort = true;
      this._globalService.isInCombat = false;
      this.audioCombatChasseur.pause();
      this.audioCombatChasseresse.pause();
      this.audioCombatBoss.pause();



      if(this.currentEnemy.id == 1) {
        this._globalService.finalQuote = "Vous avez été tué par le chasseur. En regardant votre cadavre atteindre le sol il vous lanche :  Un peu trop ambitieux pour un gamin."
      }
      if(this.currentEnemy.id == 2) {
        this._globalService.finalQuote = "La chasseresse à mis fin à vos jours.  Si seulement vous aviez pu faire équipe avec elle. "
      }
      if(this.currentEnemy.id == 3 && !this._globalService.isTraitorHelping === true) {
        this._globalService.finalQuote = "La grande bête de HamShire vous a terrassé. Qui pourra pourras mettre fin à la nuit éternelle ?  Peut-être qu'un de meilleure arme ou l'aide de quelqu'un aurait pu vous aider"
      }
      if(this.currentEnemy.id == 3 && this._globalService.isTraitorHelping === true) {
        this._globalService.finalQuote = " Trahison "
      }
      if(this.currentEnemy.id == 4) {
        this._globalService.finalQuote = "Vous avez été tué par un monstre de la forêt, quelle malchance."
      }
      if(this.currentEnemy.id == 5) {
        this._globalService.finalQuote = "Vous avez été tué par un monstre de la forêt, quelle malchance."
      }


    }
    if(this.player.mort === true) {
      this.player.positionX = 500;
      this.player.positionY = 500;
    }

    this.playerTurn = true;

    setTimeout(() => {
      this.changeEnemyAttack();
    }, 750)
  }

  changeEnemyAttack() {
    this.enemyAttacking = false;
  }

  defense() {
    this._globalService.isPlayerDefending = true;

    this.playerTurn = false;
    if(this.playerTurn == false) {
      this.timeOutCombat();
    }
  }

  switchWeapon() {
    this._globalService.player.damage = this.weaponList[this.weaponIndex].damage;
    alert("Vous venez d'equiper " + this.weaponList[this.weaponIndex].name);
    this.weaponIndex++;
    if(this.weaponIndex === 3) {
      this.weaponIndex = 0;
    }
  }

  leaveCombat() {
    this._globalService.isInCombat = false;
  }
}
