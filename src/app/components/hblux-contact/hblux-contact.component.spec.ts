import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxContactComponent } from './hblux-contact.component';

describe('HbluxContactComponent', () => {
  let component: HbluxContactComponent;
  let fixture: ComponentFixture<HbluxContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
