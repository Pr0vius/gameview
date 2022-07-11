import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-card/game-card.component';

@NgModule({
  declarations: [GameCardComponent],
  imports: [CommonModule],
  exports: [GameCardComponent],
})
export class SharedModule {}