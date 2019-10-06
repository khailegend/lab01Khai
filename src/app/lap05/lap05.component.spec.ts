import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap05Component } from './lap05.component';

describe('Lap05Component', () => {
  let component: Lap05Component;
  let fixture: ComponentFixture<Lap05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
