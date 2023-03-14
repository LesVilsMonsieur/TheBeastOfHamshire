import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map41Component } from './map41.component';

describe('Map41Component', () => {
  let component: Map41Component;
  let fixture: ComponentFixture<Map41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map41Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
