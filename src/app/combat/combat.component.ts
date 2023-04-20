import { Component, OnInit, inject } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { AudioService } from '../audio.service';
import { GlobalService } from '../global.service';
// import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  constructor(public _globalService : GlobalService) {}


  // public dialog: MatDialog
  audio = inject(AudioService);

  ngOnInit(): void {
    this._globalService.player.currentHealth = this._globalService.player.maxHealth;
    if(this.currentEnemy.id === 1){
      this.audio.play('music-combat-hunter1');
    } else if(this.currentEnemy.id === 2){
      this.audio.play('music-combat-hunter2');
    } else if(this.currentEnemy.id === 4 || this._globalService.currentEnemy.id === 5) {
      this.audio.play('music-combat-hunter2');
    } else if(this.currentEnemy.id === 3) {
      this.audio.play('sfx-cochon');
      setTimeout(() => {
        this.audio.play('music-combat-boss');
      }, 5000);
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
        this.audio.pause('music-combat-hunter1');
        this._globalService.currentEnemy.finalQuote = "Vous avez été tué par le chasseur. En regardant votre cadavre atteindre le sol il vous lance :  Un peu trop ambitieux pour un gamin.";
        this._globalService.player.weaponPickedUp.push(this._globalService.gun);
        this._globalService.isCombatTraitor = false;
        setTimeout(() => {
          alert("Vous venez de récupérer le fusil de Jhon");
          this._globalService.currentEnemy.isDefeated = true;
          // this.dialog.open(PopupComponent, {
          //   data: {
          //     name: 'le fusil de Jhon',
          //     damage: 50,
          //   }
          // });
        }, 750);
      }
      break;
      case 2 : {
        this.audio.pause('music-combat-hunter2');
        this._globalService.isCombatFriendly = false;
        this._globalService.currentEnemy.isDefeated = true;
      }
      break;
      case 3 : {
        this.audio.pause('music-combat-boss');
        this._globalService.isCombatBeast = false;
        this._globalService.currentEnemy.isDefeated = true;
        this._globalService.player.positionX = 700;
        this._globalService.player.positionY = 700;
      }
      break;
      case 4 : {
        this.audio.pause('music-combat-hunter2');
        this._globalService.currentEnemy.isDefeated = true;
        this._globalService.isCombatMinion21 = false;
      }
      break;
      case 5 : {
        this.audio.pause('music-combat-hunter2')
        this._globalService.currentEnemy.isDefeated = true;
        this._globalService.isCombatMinion34 = false;
      }
      break;
    }
  }

  attackEnemy() {
    if(this.isPlayerTurn) {
      this.currentEnemy.currentHealth -= this.player.damage
    }

    if(this.currentEnemy.id == 3 && this.currentEnemy.currentHealth <= 50) {
      this.audio.play('sfx-shotgun');
      this._globalService.trahison = true;
      this._globalService.currentEnemy.finalQuote = "Petite leçon de vie, gamin. Lorsqu'il y a de l'argent en jeu, il ne faut faire confiance à personne! Avec ta mort, je conserverai la totalité de la prime! AH AH AH"

      this.audio.pause('music-combat-boss');
      this._globalService.isInCombat = false;
      this.player.positionX = 500;
      this.player.positionY = 500;
    }

    if(this.currentEnemy.currentHealth <= 0) {
      this.leaveCombat();
      this.audio.pause('music-combat-hunter1');
      this.audio.pause('music-combat-hunter2');
      this.audio.pause('music-combat-boss');
    } else {
      this.switchTurn();
    }


  }

  enemyAttack() {
    if(this.currentEnemy.id === 1) {
      this.audio.play('sfx-shotgun');
    }
    if(this.isDefending == true) {
      this.player.currentHealth -= (this.currentEnemy.damage / 2)
      this.isDefending = false;
    } else {
      this.player.currentHealth -= this.currentEnemy.damage
    }

    if(this.player.currentHealth <= 0) {
      this.audio.pause('music-combat-hunter1');
      this.audio.pause('music-combat-hunter2');
      this.audio.pause('music-combat-boss');
      this.player.dead = true;
      this._globalService.isInCombat = false;
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
      alert("Vous n'avez pas d'autre arme à équiper");
      // this.dialog.open(PopupComponent, {
      //   data: {
      //     name: "Vous n'avez pas d'autre arme à équiper",
      //     damage: 0,
      //   }
      // });
    } else {
      alert("Vous venez d'équiper " + this.weaponList[this._globalService.currentWeaponIndex].name)
      // this.dialog.open(PopupComponent, {
      //   data: {
      //     name: "Vous venez d'équiper " + this.weaponList[this._globalService.currentWeaponIndex].name,
      //     damage: 0,
      //   }
      // });
      this._globalService.player.damage = this.weaponList[this._globalService.currentWeaponIndex].damage;
    }
    if(this._globalService.isFriendlyHelping === true || this._globalService.isTraitorHelping === true){
      this.player.damage *= 2;
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
