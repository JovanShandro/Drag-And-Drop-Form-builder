import { Component } from '@angular/core';
import {
  FormField,
  FormFieldType,
  FormItemType,
  FormSection,
  FormService,
} from '../form.service';

@Component({
  selector: 'app-form-draggable-field-list',
  templateUrl: './form-draggable-field-list.component.html',
  styleUrls: ['./form-draggable-field-list.component.scss'],
})
export class FormDraggableFieldListComponent {
  constructor(private formService: FormService) {}

  draggableFields = [
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Text,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Email,
    },
  ];

  noReturnPredicate() {
    return false;
  }

  // The list keeping ids of all fields
  // We need to keep track of then
  // because this list should be connected
  // to all sections in the app
  get allConnectedListIds() {
    const value: any = [];

    this.formService.sections.forEach((section: FormSection) => {
      section.fields.forEach((field: FormField) => {
        value.push(field.id);
      });
    });

    return value;
  }
}
