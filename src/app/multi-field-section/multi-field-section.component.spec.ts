import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFieldSectionComponent } from './multi-field-section.component';

describe('MultiFieldSectionComponent', () => {
  let component: MultiFieldSectionComponent;
  let fixture: ComponentFixture<MultiFieldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiFieldSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFieldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
