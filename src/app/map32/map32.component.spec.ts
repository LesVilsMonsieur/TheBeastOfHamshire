import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map32Component } from './map32.component';

describe('Map32Component', () => {
  let component: Map32Component;
  let fixture: ComponentFixture<Map32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
