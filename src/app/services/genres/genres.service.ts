import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiParams, ApiResponse } from 'src/app/interfaces/api';
import { Genre, GenreDetails } from 'src/app/interfaces/genre';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  url: string = env.api.url;
  query = {
    key: env.api.key,
  };

  constructor(private http: HttpClient) {}

  public getAll(aditionalParams: ApiParams = {}) {
    const params = {
      ...this.query,
      ...aditionalParams,
    };
    return this.http.get<ApiResponse<Genre[]>>(`${this.url}/genres`, {
      params,
    });
  }

  public getDetails(id: number | string) {
    return this.http.get<GenreDetails>(`${this.url}/genres/${id}`, {
      params: this.query,
    });
  }
}
