export interface Settings {
  region?: string;
  population?: number;
  infected?: number;
  dead?: number;
  capacity?: {
    available?: number;
    used?: number;
    covid?: number
  };
  maxWidth?: number;
  maxHeight?: number;
  itemSize?: number;

  infectedColor?: string;
  notInfectedColor?: string;
}
