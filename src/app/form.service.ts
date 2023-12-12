import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

/*
 * Regarding the data types here I would suggest something else
 *
 * Since we want to be able to differentiate between fields and
 * sections, maybe each section can have a type of 'section',
 * and each field a type of 'field', and then maybe have a
 * sectionType and fieldType property respectively for differentiating
 * between the same type.
 */

export enum FormItemType {
  Field = 'field',
  Section = 'section',
}

export enum FormSectionType {
  OneInARow = 'one-in-a-row',
  TwoInARow = 'two-in-a-row',
  ThreeInARow = 'three-in-a-row',
  FourInARow = 'four-in-a-row',
  FiveInARow = 'five-in-a-row',
  OneToTwoRow = 'one-to-two-row',
  TwoToOneRow = 'two-to-one-row',
}

export interface FormSection {
  id: string;
  type: FormItemType.Section;
  sectionType: FormSectionType;
  fields: FormField[];
}

export interface FormField {
  id: string;
  type: FormItemType.Field;
  fieldType: FormFieldType;
}

export enum FormFieldType {
  Text = 'text',
  Email = 'email',
  Empty = 'empty',
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  sections: FormSection[] = [];

  createSection(sectionType: FormSectionType, index: number) {
    let newSection: FormSection = {
      id: uuid(),
      type: FormItemType.Section,
      sectionType: sectionType,
      fields: [],
    };

    const numberOfFieldsBySectionType: any = {
      [FormSectionType.OneInARow]: 1,
      [FormSectionType.TwoInARow]: 2,
      [FormSectionType.ThreeInARow]: 3,
      [FormSectionType.FourInARow]: 4,
      [FormSectionType.FiveInARow]: 5,
      [FormSectionType.OneToTwoRow]: 2,
      [FormSectionType.TwoToOneRow]: 2,
    };

    for (let i = 0; i < numberOfFieldsBySectionType[sectionType]; i++) {
      newSection.fields.push({
        id: uuid(),
        type: FormItemType.Field,
        fieldType: FormFieldType.Empty,
      });
    }

    this.sections.splice(index, 0, newSection);
  }
}
