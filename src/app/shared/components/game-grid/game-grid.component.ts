import { Component, Input, OnInit } from '@angular/core';
import { DLC, Game } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss'],
})
export class GameGridComponent {
  @Input() games!: Game[];
  @Input() smallCards: boolean = false;
  @Input() rating: boolean = true;
  constructor() {}
}
