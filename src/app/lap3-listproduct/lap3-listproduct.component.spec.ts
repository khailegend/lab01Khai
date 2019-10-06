import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap3ListproductComponent } from './lap3-listproduct.component';

describe('Lap3ListproductComponent', () => {
  let component: Lap3ListproductComponent;
  let fixture: ComponentFixture<Lap3ListproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap3ListproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap3ListproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
