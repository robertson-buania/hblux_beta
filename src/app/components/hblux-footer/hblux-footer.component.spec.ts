import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxFooterComponent } from './hblux-footer.component';

describe('HbluxFooterComponent', () => {
  let component: HbluxFooterComponent;
  let fixture: ComponentFixture<HbluxFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
