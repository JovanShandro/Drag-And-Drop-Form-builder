import { Component, Input } from '@angular/core';
import { FormField, FormItemType, FormSection, FormSectionType } from '../form.service';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-multi-field-section',
  templateUrl: './multi-field-section.component.html',
  styleUrls: ['./multi-field-section.component.scss'],
})
export class MultiFieldSectionComponent {
  @Input() section?: FormSection;

  formSectionType = FormSectionType;

  // Make sure you cannot drop anything here
  noReturnPredicate() {
    return false;
  }

  // Make sure you cannot drop any sections here
  nonSectionPredicate(item: CdkDrag<any>) {
    return item?.data?.type === FormItemType.Field;
  }

  // Handle reordering of the fields
  onReorderFields(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.section?.fields || [], event.previousIndex, event.currentIndex);
  }

  // Handle dropping of a form item
  onFormItemDrop(event: CdkDragDrop<string[]>, currentField: FormField) {
    if (currentField && event?.item?.data?.fieldType) {
      currentField.fieldType = event?.item?.data?.fieldType;
    }
  }
}
