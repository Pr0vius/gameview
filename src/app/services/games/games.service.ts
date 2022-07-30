import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseExtra, ApiResponse } from 'src/app/interfaces/api';
import {
  DLC,
  Game,
  GameDetails,
  GameScreenshot,
} from 'src/app/interfaces/game';
import { APIGetGamesParams } from 'src/app/interfaces/api';
import { environment as env } from 'src/environments/environment';
import { Achievement } from 'src/app/interfaces/achievement';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private url: string = env.api.url;
  private key: string = env.api.key;
  private query = { key: this.key };
  constructor(private http: HttpClient) {}

  public getAll(querys?: APIGetGamesParams) {
    let params = {
      ...this.query,
      page: 1,
      page_size: 8,
      ...querys,
    };
    return this.http.get<ApiResponseExtra<Game[]>>(`${this.url}/games`, {
      params,
    });
  }

  public getGameDetails(slug: string, querys = {}) {
    const params = {
      ...this.query,
      ...querys,
    };
    return this.http.get<GameDetails>(`${this.url}/games/${slug}`, { params });
  }
  public getGameScreenshots(id: number) {
    return this.http.get<ApiResponse<GameScreenshot[]>>(
      `${this.url}/games/${id}/screenshots`,
      {
        params: this.query,
      }
    );
  }

  public getGameDLC(id: number) {
    return this.http.get<ApiResponse<DLC[]>>(
      `${this.url}/games/${id}/additions`,
      {
        params: this.query,
      }
    );
  }
  public getDLCParentGame(id: number) {
    return this.http.get<ApiResponse<GameDetails[]>>(
      `${this.url}/games/${id}/parent-games`,
      {
        params: this.query,
      }
    );
  }
  public getSameSeriesGames(id: number, querys: APIGetGamesParams = {}) {
    return this.http.get<ApiResponse<GameDetails[]>>(
      `${this.url}/games/${id}/game-series`,
      {
        params: { ...this.query, ...querys },
      }
    );
  }
  public getGameAchievement(id: number) {
    return this.http.get<ApiResponse<Achievement[]>>(
      `${this.url}/games/${id}/achievements`,
      {
        params: this.query,
      }
    );
  }
}
