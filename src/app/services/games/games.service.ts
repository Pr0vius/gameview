import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiErrorResponse, ApiResponse } from 'src/app/interfaces/api';
import { Game, GameDetails } from 'src/app/interfaces/game';
import { APIGetGamesParams } from 'src/app/interfaces/param';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private url = 'https://api.rawg.io/api';
  private key = '32bef4e21b5e4cb094d7f1f4a104b49b';

  constructor(private http: HttpClient) {}

  public getAll(querys?: APIGetGamesParams) {
    let params = {
      key: this.key,
      page: 1,
      page_size: 8,
      ...querys,
    };
    return this.http.get<ApiResponse<Game>>(`${this.url}/games`, {
      params,
    });
  }

  public getGameDetails(slug: string, querys = {}) {
    const params = {
      key: this.key,
      ...querys,
    };
    return this.http.get<GameDetails>(`${this.url}/games/${slug}`, { params });
  }
}
