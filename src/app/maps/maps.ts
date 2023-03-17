import { inject } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { MapPosition, MapProperties } from '../types/types';

export const maps: MapProperties[] = [
  // Rangée 0
  {
    position: [0, 0],
    background: '/assets/basbas.png',
    onBottom: null,
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onTop: () => onMoveAction([0, 1]),
    onLeft: null,
    onRight: () => onMoveAction([1, 0]),
    events: [],
  },
  {
    position: [0, 1],
    background: '/assets/c1.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([0, 0]),
    onTop: () => onMoveAction([0, 2]),
    onLeft: null,
    onRight: () => onMoveAction([1, 1]),
    events: [],
  },
  {
    position: [0, 2],
    background: '/assets/2.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([0, 1]),
    onTop: () => onMoveAction([0, 3]),
    onLeft: null,
    onRight: () => onMoveAction([1, 2]),
    events: [],
  },
  {
    position: [0, 3],
    background: '/assets/2.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([0, 2]),
    onTop: () => onMoveAction([0, 4]),
    onLeft: null,
    onRight: () => onMoveAction([1, 3]),
    events: [],
  },
  {
    position: [0, 4],
    background: '/assets/3.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([0, 3]),
    onTop: null,
    onLeft: null,
    onRight: () => onMoveAction([1, 4]),
    events: [],
  },
  // Rangée 1
  {
    position: [1, 0],
    background: '/assets/bg.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: null,
    onTop: () => onMoveAction([1, 1]),
    onLeft: () => onMoveAction([0, 0]),
    onRight: () => onMoveAction([2, 0]),
    events: [],
  },
  {
    position: [1, 1],
    background: '/assets/bg4.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([1, 0]),
    onTop: () => onMoveAction([1, 2]),
    onLeft: () => onMoveAction([0, 1]),
    onRight: () => onMoveAction([2, 1]),
    events: [],
  },
  {
    position: [1, 2],
    background: '/assets/bg4.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([1, 1]),
    onTop: () => onMoveAction([1, 3]),
    onLeft: () => onMoveAction([0, 2]),
    onRight: () => onMoveAction([2, 2]),
    events: [],
  },
  {
    position: [1, 3],
    background: '/assets/boss.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
      audio.play('sfx-thunder-2');
    },
    onBottom: null,
    onTop: null,
    onLeft: () => onMoveAction([0, 3]),
    onRight: () => onMoveAction([2, 3]),
    events: [],
  },
  {
    position: [1, 4],
    background: '/assets/5.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: null,
    onTop: null,
    onLeft: () => onMoveAction([0, 4]),
    onRight: () => onMoveAction([2, 4]),
    events: [],
  },
  // Rangée 2
  {
    position: [2, 0],
    background: '/assets/wanted.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: null,
    onTop: () => onMoveAction([2, 1]),
    onLeft: () => onMoveAction([1, 0]),
    onRight: () => onMoveAction([3, 0]),
    events: [],
  },
  {
    position: [2, 1],
    background: '/assets/m1.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
      audio.play('sfx-thunder-2');
    },
    onBottom: () => onMoveAction([2, 0]),
    onTop: () => onMoveAction([2, 2]),
    onLeft: () => onMoveAction([1, 1]),
    onRight: () => onMoveAction([3, 1]),
    events: [],
  },
  {
    position: [2, 2],
    background: '/assets/bg4.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([2, 1]),
    onTop: () => onMoveAction([2, 3]),
    onLeft: () => onMoveAction([1, 2]),
    onRight: () => onMoveAction([3, 2]),
    events: [],
  },
  {
    position: [2, 3],
    background: '/assets/4.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([2, 2]),
    onTop: null,
    onLeft: () => onMoveAction([1, 3]),
    onRight: () => onMoveAction([3, 3]),
    events: [],
  },
  {
    position: [2, 4],
    background: '/assets/6.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([2, 3]),
    onTop: null,
    onLeft: () => onMoveAction([1, 4]),
    onRight: null,
    events: [],
  },
  // Rangée 3
  {
    position: [3, 0],
    background: '/assets/14.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: null,
    onTop: () => onMoveAction([3, 1]),
    onLeft: () => onMoveAction([2, 0]),
    onRight: null,
    events: [],
  },
  {
    position: [3, 1],
    background: '/assets/4.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([3, 0]),
    onTop: () => onMoveAction([3, 2]),
    onLeft: () => onMoveAction([2, 1]),
    onRight: null,
    events: [],
  },
  {
    position: [3, 2],
    background: '/assets/4.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([3, 1]),
    onTop: () => onMoveAction([3, 3]),
    onLeft: () => onMoveAction([2, 2]),
    onRight: null,
    events: [],
  },
  {
    position: [3, 3],
    background: '/assets/2.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([3, 2]),
    onTop: () => onMoveAction([3, 4]),
    onLeft: null,
    onRight: () => onMoveAction([4, 3]),
    events: [],
  },
  {
    position: [3, 4],
    background: '/assets/m2.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([3, 3]),
    onTop: null,
    onLeft: null,
    onRight: () => onMoveAction([4, 4]),
    events: [],
  },
  // Rangée 4
  {
    position: [4, 0],
    background: '/assets/7.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: null,
    onTop: () => onMoveAction([4, 1]),
    onLeft: null,
    onRight: null,
    events: [],
  },
  {
    position: [4, 1],
    background: '/assets/9.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([4, 0]),
    onTop: () => onMoveAction([4, 2]),
    onLeft: null,
    onRight: null,
    events: [],
  },
  {
    position: [4, 2],
    background: '/assets/8.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([4, 1]),
    onTop: () => onMoveAction([4, 3]),
    onLeft: null,
    onRight: null,
    events: [],
  },
  {
    position: [4, 3],
    background: '/assets/4.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
    },
    onBottom: () => onMoveAction([4, 2]),
    onTop: () => onMoveAction([4, 4]),
    onLeft: () => onMoveAction([3, 3]),
    onRight: null,
    events: [],
  },
  {
    position: [4, 4],
    background: '/assets/6.png',
    onEnter: () => {
      const audio = inject(AudioService);
      audio.play('music-exploration');
      audio.play('sfx-thunder-2');
    },
    onBottom: () => onMoveAction([4, 3]),
    onTop: null,
    onLeft: () => onMoveAction([3, 4]),
    onRight: null,
    events: [],
  },
];

const onMoveAction = (position: MapPosition) => {
  const audio = inject(AudioService);
  audio.pause('music-exploration');
  audio.play('sfx-footsteps-dirt-1');
  audio.play('sfx-footsteps-leaves-2');
  return position;
};
