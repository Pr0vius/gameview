import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, {
  SwiperOptions,
  FreeMode,
  Thumbs,
  Autoplay,
  EffectFade,
} from 'swiper';
import { GamesService } from 'src/app/services/games/games.service';

// install Swiper modules
SwiperCore.use([FreeMode, Thumbs, Autoplay, EffectFade]);

@Component({
  selector: 'app-slider-gallery',
  templateUrl: './slider-gallery.component.html',
  styleUrls: ['./slider-gallery.component.scss'],
})
export class SliderGalleryComponent implements OnChanges {
  @ViewChild('swiper') swiper?: SwiperComponent;
  @Input() id: number = 0;

  images: string[] = [];
  isLoading: boolean = true;
  thumbsSwiper: any;
  config: SwiperOptions = {
    autoplay: {
      stopOnLastSlide: false,
      delay: 5000,
    },
    effect: 'fade',
    loop: true,
  };
  thumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    autoHeight: true,
  };
  constructor(private gameService: GamesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    this.getScreenshots(changes['id'].currentValue);
  }

  private getScreenshots(id: number) {
    return this.gameService.getGameScreenshots(id).subscribe((screenshots) => {
      this.images = screenshots!.results.map((e) => e.image);
      this.images.length === 0 && this.images.push('null')
      this.isLoading = false;
    });
  }

  onSwiper(event: any) {
    this.thumbsSwiper = event;
  }
}
