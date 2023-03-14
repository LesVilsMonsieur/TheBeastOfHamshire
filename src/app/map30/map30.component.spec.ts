import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map30Component } from './map30.component';

describe('Map30Component', () => {
  let component: Map30Component;
  let fixture: ComponentFixture<Map30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map30Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
