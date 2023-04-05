export interface Enemy {
    id : number
    name : string
    currentHealth : number
    maxHealth : number
    damage : number
    combatImageUrl : string
    dialogImageUrl : string
    combatImageSangUrl : string
    isDefeated : boolean
    finalQuote : string
}

export interface Player {
    currentHealth : number
    maxHealth : number
    damage : number
    positionX : number
    positionY : number
    dead: boolean
    weaponPickedUp : Weapon[]
}

export interface Weapon {
    name : string
    damage : number
}

