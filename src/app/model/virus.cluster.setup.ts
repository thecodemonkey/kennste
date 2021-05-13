import {Human} from './human';
import {random} from './utils';


export class VirusClusterSetup {

  spreadSize =       [45, 10, 25, 15, 5];                // 5% of all infections go to the first cluster category
  itemsPerClusterCategory = [700, 500, 300, 150, 20];    // items per cluser category

  totalItemsInCluster = [this.spreadSize.length];
  clusterAmount = [this.spreadSize.length];
  totalClusters = 0;

  constructor(public totalInfections: number) {
    this.spreadSize.forEach((s, i) => {
      this.totalItemsInCluster[i] = Math.floor(totalInfections / 100 * this.spreadSize[i]);
      this.clusterAmount[i] = Math.floor(this.totalItemsInCluster[i] / this.itemsPerClusterCategory[i]);

      this.clusterAmount.forEach(c => this.totalClusters += c);
    });
  }

  infect(humans: Human[][]): void {
    const clusters = [];

    const initBounds = {
      l: 0,
      r: humans[0].length,
      t: 0,
      b: humans.length
    };


    this.clusterAmount.forEach((camount, i) => {
      // initial range is the whole population
      let bounds = initBounds;

      for (let x = 0; x < camount; x++) {
        let rowindex = 0;
        let colIndex = 0;

        // secondary clusters appiars within the range of the initial cluster
        if (i > 0) {
          const ci = random(0, clusters.length - 1);
          bounds = clusters[ci].range;
        }

        do {
          rowindex = random(Math.floor(bounds.t), Math.floor(bounds.b));
          colIndex = random(Math.floor(bounds.l), Math.floor(bounds.r));
        } while (humans[rowindex][colIndex].isInfected);


        humans[rowindex][colIndex].isInfected = true;
        humans[rowindex][colIndex].isCoreOfCluster = true;

        humans[rowindex][colIndex].clusterSize = Math.ceil(this.itemsPerClusterCategory[i] / 17);


        // define range of primary clusters
        if (i <= 0) {
          const clusterMargin = (humans[rowindex][colIndex].clusterSize * 2);

          clusters.push({
            cat: i,
            row: rowindex,
            col: colIndex,
            range: {
              l: (colIndex - clusterMargin < 0) ? 0 : colIndex - clusterMargin,
              r: ((colIndex + clusterMargin) > initBounds.r) ? initBounds.r : (colIndex + clusterMargin),

              t: (rowindex - clusterMargin < 0) ? 0 : rowindex - clusterMargin,
              b: (rowindex + clusterMargin >= initBounds.b) ? initBounds.b : rowindex + clusterMargin,
            }
          });
        }
      }
    });
  }
}
