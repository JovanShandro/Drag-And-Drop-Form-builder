import { Component, Input } from '@angular/core';
import { FormField, FormItemType } from '../form.service';
import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-single-field-section',
  templateUrl: './single-field-section.component.html',
  styleUrls: ['./single-field-section.component.scss'],
})
export class SingleFieldSectionComponent {
  @Input() field?: FormField;

  // Make sure you cannot drop any sections here
  nonSectionPredicate(item: CdkDrag<any>) {
    return item?.data?.type === FormItemType.Field;
  }

  // Handle dropping of a form item
  onFormItemDrop(event: CdkDragDrop<string[]>, currentField?: FormField) {
    if (currentField && event?.item?.data?.fieldType) {
      currentField.fieldType = event?.item?.data?.fieldType;
    }
  }
}
