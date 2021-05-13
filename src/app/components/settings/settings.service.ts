import {StateProperty} from '../../state/state.property';
import {Injectable} from '@angular/core';
import {Settings} from '../../model/settings';

@Injectable({providedIn: 'root'})
export class SettingsService {

  s = new StateProperty<Settings>({
    region: 'Dortmund',
    population: 600000,
    infected: 25000,
    dead: 120,
    capacity: {
      available: 300,
      used: 285,
      covid: 44
    },
    itemSize: 1,
    infectedColor : '#BB0000',
    notInfectedColor : '#888888'
  });

  get settings(): Settings{
    return this.s.val;
  }

  set settings(settings: Settings) {
    const tmp = this.s.val;

    if (settings.region) { tmp.region = settings.region; }
    if (settings.population) { tmp.population = settings.population; }
    if (settings.infected) { tmp.infected = settings.infected; }
    if (settings.dead) { tmp.dead = settings.dead; }
    if (settings.capacity) { tmp.capacity = settings.capacity; }

    if (settings.maxWidth) { tmp.maxWidth = settings.maxWidth; }
    if (settings.maxHeight) { tmp.maxHeight = settings.maxHeight; }
    if (settings.itemSize) { tmp.itemSize = settings.itemSize; }

    this.s.val = tmp;
  }

}
