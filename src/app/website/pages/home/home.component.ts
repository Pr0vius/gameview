import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Game } from 'src/app/interfaces/game';
import { Genre } from 'src/app/interfaces/genre';
import { PlatformWithGames } from 'src/app/interfaces/platform';
import { GamesService } from 'src/app/services/games/games.service';
import { GenresService } from 'src/app/services/genres/genres.service';
import { PlatformsService } from 'src/app/services/platforms/platforms.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage implements OnInit {
  sliderGames: Game[] = [];
  ratingGames: Game[] = [];
  newestGames: Game[] = [];
  platforms: PlatformWithGames[] = [];
  genres: Genre[] = [];
  constructor(
    private gameService: GamesService,
    private platformService: PlatformsService,
    private genreService: GenresService,
    private title: Title
  ) {
    this.title.setTitle(env.app.title);
  }

  ngOnInit(): void {
    this.gameService.getAll().subscribe((e) => {
      this.sliderGames = e.results;
    });
    this.gameService.getAll({ ordering: '-rating', metacritic: '90,100', exclude_additions: true }).subscribe((e) => {
      this.ratingGames = e.results;
    });
    this.gameService.getAll({ ordering: '-created', metacritic: '50,100', exclude_additions: true }).subscribe((e) => {
      this.newestGames = e.results;
    });
    this.platformService.getPlatforms({ page_size: 4 }).subscribe((data) => {
      this.platforms = data.results;
    });
    this.genreService
      .getAll({ page_size: 4 })
      .subscribe((data) => (this.genres = data.results));
  }
}
