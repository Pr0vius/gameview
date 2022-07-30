import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiParams, ApiResponse } from 'src/app/interfaces/api';
import { PlatformWithGames } from 'src/app/interfaces/platform';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  private url: string = environment.api.url;
  private key: string = environment.api.key;
  private query = {
    key: this.key,
  };
  constructor(private http: HttpClient) {}

  getPlatforms(aditionalParams: ApiParams = {}) {
    const params = {
      ...this.query,
      ...aditionalParams,
    };
    return this.http.get<ApiResponse<PlatformWithGames[]>>(
      `${this.url}/platforms`,
      { params }
    );
  }
}
