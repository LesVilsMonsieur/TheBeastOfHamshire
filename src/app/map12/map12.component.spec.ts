import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map12Component } from './map12.component';

describe('Map12Component', () => {
  let component: Map12Component;
  let fixture: ComponentFixture<Map12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
