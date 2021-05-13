import {Injectable} from '@angular/core';
import {StateProperty} from './state.property';

@Injectable({providedIn: 'root'})
export class AppStateService {
  settingsOn = new StateProperty<boolean>(false);
  spinnerOn = new StateProperty<boolean>(false);
  hospitalOn = new StateProperty<boolean>(false);
  kpisOn = new StateProperty<boolean>(false);
}
