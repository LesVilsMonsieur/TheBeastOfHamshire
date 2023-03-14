import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map03Component } from './map03.component';

describe('Map03Component', () => {
  let component: Map03Component;
  let fixture: ComponentFixture<Map03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
