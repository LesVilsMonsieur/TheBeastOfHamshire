import { Injectable } from '@angular/core';
import { Enemy, Weapon,  } from 'src/assets/model';
import { Player } from 'src/assets/model';

@Injectable({

    providedIn: 'root'
})
export class GlobalService {

    constructor() {}

    //audioExploration = new Audio();

    isCombatBeast = true;
    isCombatFriendly = true;
    isCombatTraitor = true;
    isCombatMinion21 = true;
    isCombatMinion34 = true;

    trahison = false;

    //Weapons
    currentWeaponIndex = 0;
    hasPickedUpHax = false;

    empty : Weapon = {
        name : 'rien',
        damage : 10
    }
    axe : Weapon = {
        name : 'une hache',
        damage : 25
    }
    gun : Weapon = {
        name : 'le fusil',
        damage : 50
    }

    //Player
    player : Player = {
        currentHealth : 100,
        maxHealth : 100,
        damage : 10,
        positionX : 300,
        positionY : 300,
        dead : false,
        weaponPickedUp : [
           this.empty
        ]
    }

    //Ennemies
    //Hunters
    hunter1 : Enemy = {
        id : 1,
        name : 'Jhon',
        currentHealth : 200,
        maxHealth : 200,
        damage : 10,
        combatImageUrl : '/assets/Chasseurcombat.png',
        dialogImageUrl : '/assets/Chasseurguillaume2.png',
        combatImageSangUrl : '/assets/ChasseurcombatSANGOVERFIXXXXX.png',
        isDefeated : false,
        finalQuote : "Vous avez été tué par le chasseur. En regardant votre cadavre atteindre le sol il vous lance :  Un peu trop ambitieux pour un gamin."
    }

    hunter2 : Enemy = {
        id : 2,
        name : 'Louise',
        currentHealth : 100,
        maxHealth : 100,
        damage : 10,
        combatImageUrl : '/assets/Chaseressecombat.png',
        dialogImageUrl : '/assets/Chasseresseguillaume2.png',
        combatImageSangUrl : '/assets/ChaseressecombatSANGOVER.png',
        isDefeated : false,
        finalQuote : "La chasseresse à mis fin à vos jours. Si seulement vous aviez pu faire équipe avec elle."
    }

    // Great Beast
    greatBeast : Enemy = {
        id : 3,
        name : 'Great Beast of HamShire',
        currentHealth : 350,
        maxHealth : 350,
        damage : 15,
        combatImageUrl : '/assets/Monstre.png',
        dialogImageUrl : '',
        combatImageSangUrl : '/assets/MonstreSANGOVER.png',
        isDefeated : false,
        finalQuote : "La grande bête de Hamshire vous a terrassée. Qui pourra mettre fin à la nuit éternelle ?  Peut-être qu'une meilleure arme ou l'aide de quelqu'un aurait pu vous aider"
    }

    // Minion21
    minion21 : Enemy = {
        id : 4,
        name : 'Minion21',
        currentHealth : 50,
        maxHealth : 50,
        damage : 10,
        combatImageUrl : '/assets/Chien.png',
        dialogImageUrl : '',
        combatImageSangUrl : '/assets/ChienSang.png',
        isDefeated : false,
        finalQuote : "Vous avez été tué par un monstre de la forêt, quelle malchance."
    }

    // Minion34
    minion34 : Enemy = {
        id : 5,
        name : 'Minion32',
        currentHealth : 50,
        maxHealth : 50,
        damage : 10,
        combatImageUrl : '/assets/Chien.png',
        dialogImageUrl : '',
        combatImageSangUrl : '/assets/ChienSang.png',
        isDefeated : false,
        finalQuote : "Vous avez été tué par un monstre de la forêt, quelle malchance."
    }

    /// Battle
    currentEnemy : Enemy = this.hunter1;
    selectedWeapon : Weapon = this.axe;
    isInCombat: boolean = false;
    isPlayerTurn: boolean = true;

    superAttack: boolean = false;
    deathTraitor: boolean = true;
    deathFriendly: boolean = false;


    //Dialog
    isInDialog : boolean = false;

    isReadingWanted : boolean = false;
    isReadingSister : boolean = false;
    isWantedPageRead : boolean = false;
    isSisterPageRead : boolean = false;
    isTraitorHelping : boolean = false;
    isFriendlyHelping : boolean = false;
}
