import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EnvironmentInjector,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MapPosition, MapProperties, MoveAction } from '../types/types';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnChanges {
  environmentInjector = inject(EnvironmentInjector);

  @Input() properties!: MapProperties;
  @Output() positionChanged = new EventEmitter<MapPosition>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['properties'] && this.properties.onEnter) {
      this.environmentInjector.runInContext(() => this.properties.onEnter!());
    }
  }

  @HostBinding('style.background-image')
  get backgroundImage() {
    return `url("${this.properties.background}")`;
  }

  goToTop() {
    this.moveAction(this.properties.onTop);
  }

  goToRight() {
    this.moveAction(this.properties.onRight);
  }

  goToLeft() {
    this.moveAction(this.properties.onLeft);
  }

  goToBottom() {
    this.moveAction(this.properties.onBottom);
  }

  private moveAction(action: MoveAction) {
    const position = this.environmentInjector.runInContext(() => action!());

    this.positionChanged.emit(position);
  }
}
