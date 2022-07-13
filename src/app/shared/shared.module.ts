import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-grid/game-card/game-card.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { RouterModule } from '@angular/router';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';

@NgModule({
  declarations: [GameCardComponent, GameGridComponent, RatingStarsComponent],
  imports: [CommonModule, RouterModule],
  exports: [GameCardComponent, GameGridComponent, RatingStarsComponent],
})
export class SharedModule {}
