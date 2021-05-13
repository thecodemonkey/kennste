export interface Human {
  row: number;
  col: number;
  x: number;
  y: number;

  isInfected: boolean;
  isCoreOfCluster: boolean;
  isBorder?: boolean;

  clusterSize?: number;
}
