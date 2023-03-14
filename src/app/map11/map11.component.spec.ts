import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map11Component } from './map11.component';

describe('Map11Component', () => {
  let component: Map11Component;
  let fixture: ComponentFixture<Map11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
