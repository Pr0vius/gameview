import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { APIGetGamesParams } from 'src/app/interfaces/api';
import { Game } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/games/games.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  querys: APIGetGamesParams = {
    page: 1,
  };
  games: Game[] = [];

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private gameService: GamesService,
    private router: Router
  ) {
    this.title.setTitle(`Games - ${env.app.title}`);
  }

  ngOnInit(): void {
    this.getParams()
  }

  defineGames() {
    this.gameService
      .getAll({...this.querys, page_size: 28})
      .subscribe((data) => (this.games = data.results));
  }

  getParams() {
    let querys = ['ordering', 'search', 'genres', 'tags', 'page'];
    this.route.queryParamMap.subscribe((params) => {
      querys.forEach((queryName) => {
        const query = params.get(queryName);
        if (query) {
          Object.assign(this.querys, { [queryName]: query })
        }
      })
      this.defineGames()
    })
  }

  public navigate(value: 'next' | 'previous'):void;
  public navigate(value: number):void
  public navigate(value: number | string):void {
    let page : number= Number(this.querys.page)
    if(value){
      if(typeof value === 'string'){
        value === 'next' && page++
        value === 'previous' && page > 1 && page--
      }
      if(typeof value === 'number'){
        page=value
      }
    }
    this.router.navigate([], { queryParams: {
      ...this.querys,
      page
    }
    })
  }
}
