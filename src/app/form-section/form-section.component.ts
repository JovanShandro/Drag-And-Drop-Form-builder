import { Component, Input } from '@angular/core';
import { FormSection, FormSectionType } from '../form.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: [],
})
export class FormSectionComponent {
  @Input() section?: FormSection;

  formSectionType = FormSectionType;
}
