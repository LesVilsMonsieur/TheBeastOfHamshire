import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map20Component } from './map20.component';

describe('Map20Component', () => {
  let component: Map20Component;
  let fixture: ComponentFixture<Map20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
