import {Injectable} from '@angular/core';
import {StateProperty} from './state.property';

@Injectable({providedIn: 'root'})
export class AppStateService {
  simulationRunning = new StateProperty<boolean>(false);
}
