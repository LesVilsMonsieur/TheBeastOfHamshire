import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map14Component } from './map14.component';

describe('Map14Component', () => {
  let component: Map14Component;
  let fixture: ComponentFixture<Map14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
