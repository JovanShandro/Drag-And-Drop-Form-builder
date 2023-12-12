import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDraggableSectionListComponent } from './form-draggable-section-list.component';

describe('FormDraggableSectionListComponent', () => {
  let component: FormDraggableSectionListComponent;
  let fixture: ComponentFixture<FormDraggableSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDraggableSectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDraggableSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
