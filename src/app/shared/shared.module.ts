import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-grid/game-card/game-card.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GameCardComponent, GameGridComponent],
  imports: [CommonModule, RouterModule],
  exports: [GameCardComponent, GameGridComponent],
})
export class SharedModule {}
