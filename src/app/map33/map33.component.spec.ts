import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map33Component } from './map33.component';

describe('Map33Component', () => {
  let component: Map33Component;
  let fixture: ComponentFixture<Map33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
