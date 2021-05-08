import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HospitalizationComponent } from './components/hospitalization/hospitalization.component';
import { KpisComponent } from './components/kpis/kpis.component';
import { KpiItemComponent } from './components/kpis/kpi-item/kpi-item.component';
import { OutbreakAreaComponent } from './components/outbreak-area/outbreak-area.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
