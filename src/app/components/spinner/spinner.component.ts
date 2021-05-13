import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../state/app.state.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {

  constructor(public state: AppStateService) { }

  ngOnInit(): void {
  }

}
