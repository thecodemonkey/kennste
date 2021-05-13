import {ElementRef, Injectable, ViewChild} from '@angular/core';
import {AppStateService} from '../../state/app.state.service';
import {StateProperty} from '../../state/state.property';
import {Settings} from '../../model/settings';
import {Virus} from '../../model/virus';
import {timer} from 'rxjs';
import {randomize} from '../../model/utils';


@Injectable({providedIn: 'root'})
export class OutbreakService {
  offsetCanvas = new StateProperty<OffscreenCanvas>(null);
  worker: Worker;

  constructor(private state: AppStateService) {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker('./canvas.drawing.worker', { type: 'module' });
      this.worker.onmessage = ({ data }) => {
        console.log('worker message:', data);
        if (data.event === 'done' && data.onComplete) {
          this[data.onComplete](data);
        } else if (data.event === 'update' && data.onUpdate) {
          this[data.onUpdate](data);
        }
      };
    }
  }

  setCanvas(offset: OffscreenCanvas): void {
    this.offsetCanvas.val = offset;
    this.worker.postMessage({ canvas: this.offsetCanvas.val}, [this.offsetCanvas.val]);
  }

  startSimulation(settings: Settings): void {
    this.state.settingsOn.val = false;
    this.state.spinnerOn.val = true;
    this.state.kpisOn.val = false;
    this.state.hospitalOn.val = false;
    this.worker.postMessage({
      event: 'startSimulation',
      settings,
      onComplete: 'completeSimulation'
    });
  }

  completeSimulation(res: any): void  {
    console.log('ich war hier.. und complete msg.', res);


    timer(1000).subscribe(() => {
      this.state.spinnerOn.val = false;
      this.state.kpisOn.val = true;
      this.state.hospitalOn.val = true;
      this.state.settingsOn.val = true;
    });
  }
}
