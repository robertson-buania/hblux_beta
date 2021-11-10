import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxHeaderComponent } from './hblux-header.component';

describe('HbluxHeaderComponent', () => {
  let component: HbluxHeaderComponent;
  let fixture: ComponentFixture<HbluxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
