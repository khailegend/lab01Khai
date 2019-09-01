import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickproductComponent } from './clickproduct.component';

describe('ClickproductComponent', () => {
  let component: ClickproductComponent;
  let fixture: ComponentFixture<ClickproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
