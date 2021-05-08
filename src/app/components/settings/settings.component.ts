import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../state/app.state.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  constructor(public state: AppStateService) { }

  ngOnInit(): void {
  }

  switch(): void {
    this.state.settingsOn.val = !this.state.settingsOn.val;
  }

  start_outbreak(): void {
    this.state.spinnerOn.val = true;
  }
}
