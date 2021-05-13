import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SettingsService} from '../settings/settings.service';
import {OutbreakService} from './outbreak.service';

@Component({
  selector: 'app-outbreak-area',
  templateUrl: './outbreak-area.component.html',
  styleUrls: ['./outbreak-area.component.css']
})
export class OutbreakAreaComponent implements OnInit, AfterViewInit  {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  size = {
    width: 0,
    height: 0
  };

  constructor(private outbreakService: OutbreakService, private settingsService: SettingsService) { }

  ngOnInit(): void { }

  async ngAfterViewInit(): Promise<void> {
    this.size.width = window.innerWidth;
    this.size.height = window.innerHeight;

    setTimeout(async () => {
      const canvasOffscreen = this.canvas.nativeElement.transferControlToOffscreen();

      this.outbreakService.setCanvas(canvasOffscreen);
      this.settingsService.settings = {
        maxWidth : this.size.width,
        maxHeight : this.size.height
      };
    }, 100);
  }
}
