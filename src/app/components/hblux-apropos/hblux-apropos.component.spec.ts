import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxAproposComponent } from './hblux-apropos.component';

describe('HbluxAproposComponent', () => {
  let component: HbluxAproposComponent;
  let fixture: ComponentFixture<HbluxAproposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxAproposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
