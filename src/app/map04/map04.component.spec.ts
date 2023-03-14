import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map04Component } from './map04.component';

describe('Map04Component', () => {
  let component: Map04Component;
  let fixture: ComponentFixture<Map04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
