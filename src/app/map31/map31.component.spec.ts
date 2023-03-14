import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map31Component } from './map31.component';

describe('Map31Component', () => {
  let component: Map31Component;
  let fixture: ComponentFixture<Map31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
