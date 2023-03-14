import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map10Component } from './map10.component';

describe('Map10Component', () => {
  let component: Map10Component;
  let fixture: ComponentFixture<Map10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
