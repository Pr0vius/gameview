import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DeveloperDetails } from 'src/app/interfaces/developer';
import { Game } from 'src/app/interfaces/game';
import { DeveloperService } from 'src/app/services/developer/developer.service';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
})
export class DeveloperComponent implements OnInit {
  slug: string = '';
  dev!: DeveloperDetails;
  loading: boolean = false;
  games: Game[] = [];
  page: number = 2;
  constructor(
    private route: ActivatedRoute,
    private developerService: DeveloperService,
    private gameService: GamesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const slug = params.get('slug');
          if (slug) this.slug = slug;
          return this.developerService.getDetails(this.slug);
        }),
        switchMap((data) => {
          this.dev = data;
          return this.gameService.getAll({ developers: this.dev.slug });
        })
      )
      .subscribe((res) => (this.games = res.results));
  }

  onClick() {
    this.loading = true;
    this.gameService
      .getAll({ developers: this.dev.slug, page: this.page })
      .subscribe((res) => {
        this.games = [...this.games, ...res.results];
        this.page++;
        this.loading = false;
      });
  }
}
