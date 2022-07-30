import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIGetGamesParams } from 'src/app/interfaces/api';
import { Game } from 'src/app/interfaces/game';
import { TagDetails } from 'src/app/interfaces/tag';
import { GamesService } from 'src/app/services/games/games.service';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  tag!: TagDetails;
  games: Game[] = [];
  page: number = 1;
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private tagService: TagsService,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.getTag(slug!);
      this.getGames(slug!);
    });
  }

  getTag(slug: string) {
    this.tagService.getDetails(slug).subscribe((data) => (this.tag = data));
  }
  getGames(slug: string, options: APIGetGamesParams = {}) {
    this.loading = true;
    this.gamesService.getAll({ tags: slug, ...options }).subscribe((data) => {
      this.games = [...this.games, ...data.results];
      this.page++;
      this.loading = false;
    });
  }
  onClick() {
    this.getGames(this.tag.slug, { page: this.page });
  }
}
