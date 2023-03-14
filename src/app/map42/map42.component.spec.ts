import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map42Component } from './map42.component';

describe('Map42Component', () => {
  let component: Map42Component;
  let fixture: ComponentFixture<Map42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map42Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Map42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
