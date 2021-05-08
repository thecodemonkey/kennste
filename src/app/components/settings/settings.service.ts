import {StateProperty} from '../../state/state.property';
import {Injectable} from '@angular/core';
import {Settings} from '../../model/settings';

@Injectable({providedIn: 'root'})
export class SettingsService {
  settings = new StateProperty<Settings>(null);
}
