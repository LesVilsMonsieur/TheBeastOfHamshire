import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map00Component } from './map00.component';

describe('Map00Component', () => {
  let component: Map00Component;
  let fixture: ComponentFixture<Map00Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map00Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
