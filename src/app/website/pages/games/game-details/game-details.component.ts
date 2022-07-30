import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Achievement } from 'src/app/interfaces/achievement';
import { DLC, GameDetails } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games/games.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit, OnDestroy {
  slug: string | null = null;
  game: GameDetails | null = null;
  isLoading: boolean = true;
  images: string[] = [];
  extraContent: DLC[] = [];
  achievements: Achievement[] = [];
  parentsGame: GameDetails[] = [];
  seriesGames: GameDetails[] = [];
  subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService,
    private title: Title
  ) {}

  ngOnInit(): void {
    const gameDetailSubscription = this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.slug = params.get('slug');
          if (this.slug) return this.gamesService.getGameDetails(this.slug);
          this.router.navigate(['/not-found']);
          return [null];
        })
      )
      .subscribe(
        (data) => {
          this.game = data;
          this.title.setTitle(`${this.game?.name} - ${environment.app.title}`);
          this.isLoading = false;
          this.loadExtraData();
        },
        (err) => err.status === 404 && this.router.navigate(['/not-found'])
      );
    this.subscriptions.push(gameDetailSubscription);
  }

  private loadExtraData() {
    const gamesExtraContentSubscription = this.gamesService
      .getGameDLC(this.game!.id)
      .subscribe((e) => (this.extraContent = e.results));
    this.subscriptions.push(gamesExtraContentSubscription);

    const achievementSubscriotion = this.gamesService
      .getGameAchievement(this.game!.id)
      .subscribe((e) => (this.achievements = e.results));
    this.subscriptions.push(achievementSubscriotion);

    const parentGameSubscription = this.gamesService
      .getDLCParentGame(this.game!.id)
      .subscribe((e) => (this.parentsGame = e.results));
    this.subscriptions.push(parentGameSubscription);

    const seriesSubscription = this.gamesService
      .getSameSeriesGames(this.game!.id, { page_size: 8 })
      .subscribe((e) => {
        this.seriesGames = e.results.sort((a, b) => b.rating - a.rating);
      });
    this.subscriptions.push(seriesSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((e) => e.unsubscribe());
  }
}
