import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbluxNouvelArticleComponent } from './hblux-nouvel-article.component';

describe('HbluxNouvelArticleComponent', () => {
  let component: HbluxNouvelArticleComponent;
  let fixture: ComponentFixture<HbluxNouvelArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbluxNouvelArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HbluxNouvelArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
