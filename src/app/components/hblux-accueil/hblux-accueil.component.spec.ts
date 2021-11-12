import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxAccueilComponent } from './hblux-accueil.component';

describe('HbluxAccueilComponent', () => {
  let component: HbluxAccueilComponent;
  let fixture: ComponentFixture<HbluxAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
