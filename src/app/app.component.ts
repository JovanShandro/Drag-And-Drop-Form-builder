import { Component } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormService],
})
export class AppComponent {
  generateHTML() {
    console.log('generate html');
  }
}
