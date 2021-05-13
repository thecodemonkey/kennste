/// <reference lib="webworker" />

import {Virus} from '../../model/virus';
import {City} from '../../model/city';
import {Settings} from '../../model/settings';
import {Human} from '../../model/human';
import {randomize} from '../../model/utils';
import {timer} from 'rxjs';
import {CanvasService} from '../../services/canvas.service';


let ctx = null;
let canvasService: CanvasService;


addEventListener('message', async ({ data }) => {
  if (data.canvas) {
    ctx = data.canvas.getContext('2d');
    canvasService = new CanvasService(ctx);
  }

  switch (data.event) {
    case 'init':
      complete('init complete.', data.settings);
      break;
    case 'startSimulation':
      const virus = await startSimulation(data.settings, data.onUpdate);
      complete('simulation complete.', data.settings, virus, data.onComplete);
      break;
    case 'drawCluster':
      console.log('post drawCluster.', data);
      await drawCluster(data.human, data.settings);
      complete('cluster drawn.', data.settings);
      break;
    default:
      console.log('no event function found.', data.event);
      const response = `worker response to ${data}`;
      postMessage(response);
      break;
  }
});

async function startSimulation(settings: Settings, updateClbk: any): Promise<Virus> {
  const city = new City(settings.population, settings.maxWidth, settings.maxHeight, settings.itemSize);

  console.log('city', city);

  const virus = new Virus(settings.infected);
  virus.infect(city);

  virus.humansFlat.forEach(h => {
    drawPixel(h.x, h.y, '#fff', settings.itemSize);
  });

  const clusters = randomize(virus.humansFlat).filter(h => h.isCoreOfCluster);

  console.log('clusters: ', clusters);

  for (const c of clusters) {
    await timer(20).toPromise();
    await drawCluster(c, settings);
  }


  // markInfected(virus.humansFlat, settings);

  console.log('complete drawing ' + clusters.length + ' .');
  return virus;
}

function markInfected(humans: Human[], settings: Settings): void {

    // mark infected inside cluster circle
    for (const h of humans) {
      const col = canvasService.getPixelColor(h.x, h.y, 1);

      console.log('mark infected..', col);

      if (col !== '#888888' && col !== '#ffffff') {
        drawPixel(h.x, h.y, settings.infectedColor, settings.itemSize);
      } else {
        drawPixel(h.x, h.y, '#000000', settings.itemSize);
        h.isInfected = false;
      }
    }

    console.log('mark not Infected..');
    // mark infected/notinfected  ...
    for (const h of humans) {
      const col = canvasService.getPixelColor(h.x, h.y, 1);
      if (col ===  '#000000'){
        h.isInfected = false;
        drawPixel(h.x, h.y, settings.notInfectedColor, settings.itemSize);
      }
      else { h.isInfected = true; }
    }
}

// TODO: move drawing functions, to specific CanvasService

async function drawCluster(h: Human, settings: Settings): Promise<void> {

        drawPixel(h.x, h.y, '#FF0000', settings.itemSize);
        drawCircle(h.x, h.y, '#ff000044', Math.floor(h.clusterSize / 5));
        drawCircle(h.x, h.y, '#ff00000a', Math.floor(h.clusterSize));

}

function drawPixel(x: number, y: number, color: string, size: number): void {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

function drawCircle(x: number, y: number, color: string, size: number): void {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

function complete(msg: string, settings: Settings, data?: any, completeClbk?: any): void {
  postMessage({ event: 'done', message: msg, settings, onComplete: completeClbk, data});
}
