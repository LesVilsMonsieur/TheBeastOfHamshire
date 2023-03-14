import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map02Component } from './map02.component';

describe('Map02Component', () => {
  let component: Map02Component;
  let fixture: ComponentFixture<Map02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
