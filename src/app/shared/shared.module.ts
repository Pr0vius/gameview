import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { GameCardComponent } from './components/game-grid/game-card/game-card.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { RatingStarsComponent } from './components/rating/rating-stars/rating-stars.component';
import { PlatformIconComponent } from './components/platform-icon/platform-icon.component';
import { SliderGalleryComponent } from './components/slider-gallery/slider-gallery.component';
import { StoreButtonComponent } from './components/store-button/store-button.component';
import { IconComponent } from './components/store-button/icon/icon.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AchievementComponent } from './components/achievements/achievement/achievement.component';
import { SmallCardComponent } from './components/game-grid/small-card/small-card.component';
import { RequirementsComponent } from './components/requeriments/requeriments.component';
import { RatingBarComponent } from './components/rating/rating-bar/rating-bar.component';
import { GameFeaturesComponent } from './components/game-features/game-features.component';
import { AchievementModalComponent } from './components/achievements/achievement-modal/achievement-modal.component';
import { ImageComponent } from './components/image/image.component';
import { GamesSliderComponent } from './components/games-slider/games-slider.component';
import { SlideCardComponent } from './components/games-slider/slide-card/slide-card.component';
import { CardComponent } from './components/card/card.component';
import { LoadButtonComponent } from './components/load-button/load-button.component';

@NgModule({
  declarations: [
    GameCardComponent,
    GameGridComponent,
    RatingStarsComponent,
    PlatformIconComponent,
    SliderGalleryComponent,
    StoreButtonComponent,
    IconComponent,
    AchievementsComponent,
    AchievementComponent,
    SmallCardComponent,
    RequirementsComponent,
    RatingBarComponent,
    GameFeaturesComponent,
    AchievementModalComponent,
    ImageComponent,
    GamesSliderComponent,
    SlideCardComponent,
    CardComponent,
    LoadButtonComponent,
  ],
  imports: [CommonModule, RouterModule, SwiperModule],
  exports: [
    GameCardComponent,
    GameGridComponent,
    RatingStarsComponent,
    PlatformIconComponent,
    SliderGalleryComponent,
    StoreButtonComponent,
    IconComponent,
    AchievementsComponent,
    AchievementComponent,
    SmallCardComponent,
    RequirementsComponent,
    RatingBarComponent,
    GameFeaturesComponent,
    AchievementModalComponent,
    ImageComponent,
    GamesSliderComponent,
    CardComponent,
    LoadButtonComponent
  ],
})
export class SharedModule {}
