import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map43Component } from './map43.component';

describe('Map43Component', () => {
  let component: Map43Component;
  let fixture: ComponentFixture<Map43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map43Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
