import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap04Component } from './lap04.component';

describe('Lap04Component', () => {
  let component: Lap04Component;
  let fixture: ComponentFixture<Lap04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
