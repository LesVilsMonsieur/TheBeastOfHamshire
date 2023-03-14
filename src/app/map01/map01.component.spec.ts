import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map01Component } from './map01.component';

describe('Map01Component', () => {
  let component: Map01Component;
  let fixture: ComponentFixture<Map01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
