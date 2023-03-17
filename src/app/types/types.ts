export type MapPosition = [number, number];
export type EventPosition = [number, number];

export type MapEvent = {
  position: EventPosition;
  action: () => void;
};

export type MoveAction = (() => MapPosition) | null;

export type MapProperties = {
  position: MapPosition;
  onEnter: (() => void) | null;
  onLeft: MoveAction;
  onRight: MoveAction;
  onTop: MoveAction;
  onBottom: MoveAction;
  background: string;
  events: MapEvent[];
};

export type AudioMap = Record<string, HTMLAudioElement>;
