import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kpi-item',
  templateUrl: './kpi-item.component.html',
  styleUrls: ['./kpi-item.component.less']
})
export class KpiItemComponent implements OnInit {
  @Input() value = 0;
  @Input() share = 0;
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
