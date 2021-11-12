import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxEditArticleComponent } from './hblux-edit-article.component';

describe('HbluxEditArticleComponent', () => {
  let component: HbluxEditArticleComponent;
  let fixture: ComponentFixture<HbluxEditArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxEditArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
