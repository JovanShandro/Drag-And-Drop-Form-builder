import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDraggableFieldListComponent } from './form-draggable-field-list.component';

describe('FormDraggableFieldListComponent', () => {
  let component: FormDraggableFieldListComponent;
  let fixture: ComponentFixture<FormDraggableFieldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDraggableFieldListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDraggableFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
