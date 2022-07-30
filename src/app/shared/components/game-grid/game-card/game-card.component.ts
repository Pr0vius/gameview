import { Component, Input } from '@angular/core';
import { DLC, Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
  @Input() game!: Game | DLC;

  constructor() {}
}
