import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab2DetailComponent } from './lab2-detail.component';

describe('Lab2DetailComponent', () => {
  let component: Lab2DetailComponent;
  let fixture: ComponentFixture<Lab2DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab2DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab2DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
