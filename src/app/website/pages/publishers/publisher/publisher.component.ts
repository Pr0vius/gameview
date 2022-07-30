import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Game } from 'src/app/interfaces/game';
import { PublisherDetails } from 'src/app/interfaces/publisher';
import { GamesService } from 'src/app/services/games/games.service';
import { PublishersService } from 'src/app/services/publishers/publishers.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {
  slug: string = '';
  dev!: PublisherDetails;
  loading: boolean = false;
  games: Game[] = [];
  page: number = 2;
  constructor(
    private route: ActivatedRoute,
    private publisherService: PublishersService,
    private gameService: GamesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const slug = params.get('slug');
          if (slug) this.slug = slug;
          return this.publisherService.getDetails(this.slug);
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
