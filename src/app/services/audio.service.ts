import { Injectable } from '@angular/core';
import { AudioMap } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  audioMap = {
    'music-dialog-hunter-1': new Audio('./assets/Music_Dialogue_Chasseur.wav'),
    'music-exploration': new Audio('./assets/Music_Exploration.wav'),
    'sfx-footsteps-dirt-1': new Audio('./assets/SFX_FootstepsDirt1.wav'),
    'sfx-footsteps-leaves-2': new Audio('./assets/SFX_FootstepsLeaves2.wav'),
    'sfx-thunder-2': new Audio('./assets/SFX_Thunder2.wav'),
    'sfx-paper-1': new Audio('./assets/SFX_Papier1.wav'),
  } satisfies AudioMap;

  play(sound: keyof typeof this.audioMap) {
    this.audioMap[sound].play();
  }

  pause(sound: keyof typeof this.audioMap) {
    this.audioMap[sound].pause();
  }
}
