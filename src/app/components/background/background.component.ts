import { Component, OnInit,  ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements AfterViewInit {

  @ViewChild('canv')
  canv: ElementRef;

  constructor() {}

  public context: CanvasRenderingContext2D;
  public innerWidth: any;
  public innerHeight: any;
  public cols: any;
  public ypos: any;

  ngAfterViewInit(): void {
    this.context = (this.canv.nativeElement as HTMLCanvasElement).getContext(
      '2d'
    );
    this.innerHeight = ((this.canv.nativeElement as HTMLCanvasElement).height = window.innerHeight);
    this.innerWidth = ((this.canv.nativeElement as HTMLCanvasElement).width = window.innerWidth);
    console.log(window.innerHeight + " " + this.innerHeight + " " + this.innerWidth + " " + window.innerWidth);

    this.cols = Math.floor(this.innerWidth / 20) + 1;
    this.ypos = Array(this.cols).fill(0);

    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this.innerWidth, this.innerHeight);
    
    setInterval(() => {
      this.context.fillStyle = '#0001';
      this.context.fillRect(0, 0, this.innerWidth, this.innerHeight);

      this.context.fillStyle = '#0f0';
      this.context.font = '15pt monospace';

      this.ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);

        const x = ind * 20;

        this.context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) this.ypos[ind] = 0;
        else this.ypos[ind] = y + 20;
      });
    }, 50);
  }
  public playMusic(){
    let audio = new Audio();
    audio.src = '../assets/theme.mp3';
    audio.load();
    audio.play();
  }
}
