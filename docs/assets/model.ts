export interface Enemy {
    id : number
    name : string
    currentHealth : number
    maxHealth : number
    damage : number
    combatImageUrl : string
    dialogImageUrl : string
    combatImageSangUrl : string
}

export interface Player {
    currentHealth : number
    maxHealth : number
    damage : number
    positionX : number
    positionY : number
    mort: boolean
}

export interface Weapon {
    name : string
    damage : number
}

