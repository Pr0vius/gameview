import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { GameDetails } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  slug: string | null = null;
  game: GameDetails | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.slug = params.get('slug');
          if (this.slug) return this.gamesService.getGameDetails(this.slug);
          this.router.navigate(['/not-found']);
          return [null];
        })
      )
      .subscribe(
        (data) => (this.game = data),
        (err) => err.status === 404 && this.router.navigate(['/not-found'])
      );
  }
}
