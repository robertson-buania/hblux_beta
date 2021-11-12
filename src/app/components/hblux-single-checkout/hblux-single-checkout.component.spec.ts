import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxSingleCheckoutComponent } from './hblux-single-checkout.component';

describe('HbluxSingleCheckoutComponent', () => {
  let component: HbluxSingleCheckoutComponent;
  let fixture: ComponentFixture<HbluxSingleCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxSingleCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxSingleCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
