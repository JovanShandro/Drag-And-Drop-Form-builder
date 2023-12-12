import { Component } from '@angular/core';
import { FormItemType, FormSectionType } from '../form.service';

@Component({
  selector: 'app-form-draggable-section-list',
  templateUrl: './form-draggable-section-list.component.html',
  styleUrls: ['./form-draggable-section-list.component.scss'],
})
export class FormDraggableSectionListComponent {
  draggableSections: any[] = [
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.OneInARow,
      placeholders: '1',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.TwoInARow,
      placeholders: '1:1',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.ThreeInARow,
      placeholders: '1:1:1',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.FourInARow,
      placeholders: '1:1:1:1',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.OneToTwoRow,
      placeholders: '1:2',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.TwoToOneRow,
      placeholders: '2:1',
    },
  ];

  // You can read more about the noReturnPredicate in the angular cdk drag and drop docs
  noReturnPredicate() {
    return false;
  }
}
