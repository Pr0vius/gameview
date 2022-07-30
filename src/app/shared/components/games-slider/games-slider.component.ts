import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-games-slider',
  templateUrl: './games-slider.component.html',
  styleUrls: ['./games-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GamesSliderComponent implements OnInit {
  @Input() games!: Game[];
  config: SwiperOptions = {
    autoplay: {
      delay: 5000,
    },
    pagination: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
