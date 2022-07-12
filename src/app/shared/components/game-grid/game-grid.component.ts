import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss'],
})
export class GameGridComponent implements OnInit {
  games: Game[] = [];
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getAll().subscribe((data) => (this.games = data.results));
  }
}
