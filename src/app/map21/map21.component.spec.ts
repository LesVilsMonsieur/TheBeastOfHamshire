import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map21Component } from './map21.component';

describe('Map21Component', () => {
  let component: Map21Component;
  let fixture: ComponentFixture<Map21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
