import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { FormRendererComponent } from './form-renderer/form-renderer.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormFieldComponent } from './form-field/form-field.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SingleFieldSectionComponent } from './single-field-section/single-field-section.component';
import { MultiFieldSectionComponent } from './multi-field-section/multi-field-section.component';
import { FormDraggableSectionListComponent } from './form-draggable-section-list/form-draggable-section-list.component';
import { FormDraggableFieldListComponent } from './form-draggable-field-list/form-draggable-field-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRendererComponent,
    FormSectionComponent,
    FormFieldComponent,
    SidebarComponent,
    SingleFieldSectionComponent,
    MultiFieldSectionComponent,
    FormDraggableSectionListComponent,
    FormDraggableFieldListComponent,
  ],
  imports: [BrowserModule, DragDropModule, MatTooltipModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
