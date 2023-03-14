import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map24Component } from './map24.component';

describe('Map24Component', () => {
  let component: Map24Component;
  let fixture: ComponentFixture<Map24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
