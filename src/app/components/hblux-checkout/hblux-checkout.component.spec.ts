import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxCheckoutComponent } from './hblux-checkout.component';

describe('HbluxCheckoutComponent', () => {
  let component: HbluxCheckoutComponent;
  let fixture: ComponentFixture<HbluxCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
