import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit, AfterViewInit {
  @Input() error: string = 'assets/images/404.jpg';
  @Input() adjust: boolean = false;
  @Input() src: string | null = null;
  @Input() alt: string = '';
  @Input() aspectRatio: number[] = [16, 9];
  @ViewChild('container') container?: ElementRef;
  loading: boolean = true;
  constructor(private render: Renderer2) {}
  ngOnInit() {
    this.src === null && (this.src = this.error);
  }
  ngAfterViewInit() {
    if (this.adjust) {
      const element = this.container?.nativeElement as HTMLDivElement;
      const padding = `${(this.aspectRatio[1] / this.aspectRatio[0]) * 100}%`;
      this.render.setStyle(element, 'padding-top', padding);
    }
  }
  onError() {
    this.src = this.error;
    this.loading = false;
  }
  onLoad() {
    this.loading = false;
  }
}
