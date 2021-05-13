import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HospitalizationComponent } from './components/hospitalization/hospitalization.component';
import { KpisComponent } from './components/kpis/kpis.component';
import { KpiItemComponent } from './components/kpis/kpi-item/kpi-item.component';
import { OutbreakAreaComponent } from './components/outbreak-area/outbreak-area.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HospitalizationComponent,
    KpisComponent,
    KpiItemComponent,
    OutbreakAreaComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
