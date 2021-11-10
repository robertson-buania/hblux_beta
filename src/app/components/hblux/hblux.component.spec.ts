import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxComponent } from './hblux.component';

describe('HbluxComponent', () => {
  let component: HbluxComponent;
  let fixture: ComponentFixture<HbluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
