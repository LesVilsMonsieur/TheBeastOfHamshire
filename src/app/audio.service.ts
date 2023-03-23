import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audioMap = {
    'music-exploration': new Audio('../assets/Music_Exploration.wav'),
    'music-dialog-hunter1': new Audio('../assets/Music_Dialogue_Chasseur.wav'),
    'music-dialog-hunter2': new Audio('../assets/Music_Dialogue_ChasseurFeminin.wav'),
    'music-combat-hunter1': new Audio('../assets/Music_Combat_Chasseur.wav'),
    'music-combat-hunter2': new Audio('../assets/Music_Combat_ChasseurFeminin.wav'),
    'music-combat-boss': new Audio('../assets/Music_Combat_BossFinal.wav'),
    'music-menu': new Audio('../assets/Music_OuvertureMenu.wav'),
    'music-fin': new Audio('../assets/Music_Fin.wav'),
    'sfx-footsteps-dirt': new Audio('../assets/SFX_FootstepsDirt1.wav'),
    'sfx-footsteps-leaves': new Audio('../assets/SFX_FootstepsLeaves2.wav'),
    'sfx-paper': new Audio('../assets/SFX_Papier1.wav'),
    'sfx-thunder': new Audio('../assets/SFX_Thunder2.wav'),
    'sfx-cochon': new Audio('../assets/SFX_Cochon2.wav'),
    'sfx-shotgun': new Audio('../assets/SFX_Shotgun.wav'),
    'sfx-click': new Audio('../assets/SFX_Click-Menu.wav'),
    'sfx-depart': new Audio('../assets/SFX_GO-TopDepart.wav'),
    'sfx-crayon': new Audio('../assets/SFX_Crayon1.wav'),
    'stinger-mort': new Audio('../assets/Stinger_Mort.wav'),
  }

  play(sound: keyof typeof this.audioMap) {
    this.audioMap[sound].play();
  }

  pause(sound: keyof typeof this.audioMap) {
    this.audioMap[sound].pause();
  }

  footsteps() {
    this.audioMap['sfx-footsteps-dirt'].play();
    this.audioMap['sfx-footsteps-leaves'].play();

  }

}
