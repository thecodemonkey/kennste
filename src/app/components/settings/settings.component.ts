import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../state/app.state.service';
import {FormControl, FormGroup} from '@angular/forms';
import {SettingsService} from './settings.service';
import {OutbreakService} from '../outbreak-area/outbreak.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {
  form = new FormGroup({
    region: new FormControl(''),
    population: new FormControl(''),
    infected: new FormControl(''),
    dead: new FormControl(''),

    bedsAvailable: new FormControl(''),
    bedsUsed: new FormControl(''),
    bedsCovid: new FormControl(''),
  });

  constructor(public state: AppStateService,
              private outbreakService: OutbreakService,
              private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.form.patchValue({
      region: this.settingsService.settings.region,
      population: this.settingsService.settings.population,
      infected: this.settingsService.settings.infected,
      dead: this.settingsService.settings.dead,
      bedsAvailable: this.settingsService.settings.capacity.available,
      bedsUsed: this.settingsService.settings.capacity.used,
      bedsCovid: this.settingsService.settings.capacity.covid
    });
  }

  switch(): void {
    this.state.settingsOn.val = !this.state.settingsOn.val;
  }

  start_outbreak(): void {
    this.state.spinnerOn.val = true;
    this.outbreakService.startSimulation(this.settingsService.settings);
  }

  submit($event: any): void {
    const f = this.form.controls;

    this.settingsService.settings = {
      region : f.region.value,
      population: f.population.value,
      infected: f.infected.value,
      dead: f.dead.value,
      capacity: {
        available : f.bedsAvailable.value,
        used : f.bedsUsed.value,
        covid : f.bedsCovid.value,
      }
    };

    this.outbreakService.startSimulation(this.settingsService.settings);
  }
}
