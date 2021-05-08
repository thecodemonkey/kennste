import { Component } from '@angular/core';
import {AppStateService} from './state/app.state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kennste-ng';

  constructor(public state: AppStateService) {
  }
}
