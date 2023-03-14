import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map44Component } from './map44.component';

describe('Map44Component', () => {
  let component: Map44Component;
  let fixture: ComponentFixture<Map44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map44Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
