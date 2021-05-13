import {Human} from './human';
import {chunk} from './utils';

export class City {
  humans: Human[][] = [];

  constructor(public population: number,
              public maxWidth: number,
              public maxHeight: number,
              itemSize: number) {

    const rowSize = Math.floor(maxWidth / (itemSize * 2));
    const tmpArray = chunk(new Array(population), rowSize);

    tmpArray.forEach((row, ri) => {
      this.humans.push(row.map((i, ii) => ({
        row: ri,
        col: ii,
        x : (ii * 2) * itemSize,
        y : (ri * 2) * itemSize,
        isInfected: false,
        isCoreOfCluster: false,
        isBorder: false
      })));
    });
  }


  getVisible(): number {
    let cnt = 0;

    this.humans.forEach(r =>
      cnt += r.filter(h => h.x < this.maxWidth &&
        h.y < this.maxHeight).length
    );

    return cnt;
  }

}
