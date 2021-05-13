import {VirusClusterSetup} from './virus.cluster.setup';
import {City} from './city';
import {Human} from './human';


export class Virus {
  clusterSetup: VirusClusterSetup;
  city: City;
  humansFlat: Human[];

  constructor(totalInfected: number) {
    this.clusterSetup = new VirusClusterSetup(totalInfected);
  }

  infect(city: City): Virus {
    this.city = city;
    this.clusterSetup.infect(city.humans);
    this.humansFlat = this.city.humans.reduce((acc, val) => acc.concat(val), []);

    return this;
  }
}
