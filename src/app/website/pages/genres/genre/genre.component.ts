import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIGetGamesParams } from 'src/app/interfaces/api';
import { Game } from 'src/app/interfaces/game';
import { GenreDetails } from 'src/app/interfaces/genre';
import { GamesService } from 'src/app/services/games/games.service';
import { GenresService } from 'src/app/services/genres/genres.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  genre!: GenreDetails;
  games: Game[] = [];
  page: number = 1;
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private genreService: GenresService,
    private gamesServices: GamesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.getInfo(slug!);
      this.getGames(slug!);
    });
  }

  getInfo(slug: string) {
    this.genreService.getDetails(slug).subscribe((data) => (this.genre = data));
  }
  getGames(slug: string, options: APIGetGamesParams = {}) {
    this.loading = true;
    this.gamesServices
      .getAll({ genres: slug, ...options })
      .subscribe((data) => {
        this.games = [...this.games, ...data.results];
        this.page++;
        this.loading = false;
      });
  }
  onClick() {
    this.getGames(this.genre.slug, { page: this.page });
  }
}
