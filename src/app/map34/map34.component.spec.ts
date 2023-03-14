import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map34Component } from './map34.component';

describe('Map34Component', () => {
  let component: Map34Component;
  let fixture: ComponentFixture<Map34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map34Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
