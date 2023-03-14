import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map40Component } from './map40.component';

describe('Map40Component', () => {
  let component: Map40Component;
  let fixture: ComponentFixture<Map40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map40Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
