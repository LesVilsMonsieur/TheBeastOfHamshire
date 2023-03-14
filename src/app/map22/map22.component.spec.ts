import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map22Component } from './map22.component';

describe('Map22Component', () => {
  let component: Map22Component;
  let fixture: ComponentFixture<Map22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
