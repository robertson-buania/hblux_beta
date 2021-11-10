import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxboutiqueComponent } from './hbluxboutique.component';

describe('HbluxboutiqueComponent', () => {
  let component: HbluxboutiqueComponent;
  let fixture: ComponentFixture<HbluxboutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxboutiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxboutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
