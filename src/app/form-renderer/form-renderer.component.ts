import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {
  FormService,
  FormItemType,
  FormSection,
} from '../form.service';

@Component({
  selector: 'app-form-renderer',
  templateUrl: './form-renderer.component.html',
  styleUrls: ['./form-renderer.component.scss'],
})
export class FormRendererComponent implements OnInit {
  constructor(private formService: FormService) {}

  sections: FormSection[] = [];

  ngOnInit() {
    this.sections = this.formService.sections;
  }

  // Makes sure we can only drop sections
  isSectionPredicate(item: CdkDrag<any>) {
    return item?.data?.type === FormItemType.Section;
  }

  onSectionDrop(event: CdkDragDrop<string[]>) {
    // We are dropping a new section into the list
    if (event.previousContainer !== event.container) {
      this.formService.createSection(
        event.item?.data?.sectionType,
        event.currentIndex
      );

      return;
    }

    // We are just reordering
    moveItemInArray(
      this.formService.sections,
      event.previousIndex,
      event.currentIndex
    );
  }
}
