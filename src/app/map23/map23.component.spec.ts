import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map23Component } from './map23.component';

describe('Map23Component', () => {
  let component: Map23Component;
  let fixture: ComponentFixture<Map23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
