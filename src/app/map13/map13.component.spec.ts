import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map13Component } from './map13.component';

describe('Map13Component', () => {
  let component: Map13Component;
  let fixture: ComponentFixture<Map13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
