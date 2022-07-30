import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiParams, ApiResponse } from 'src/app/interfaces/api';
import { Tag, TagDetails } from 'src/app/interfaces/tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private url: string = environment.api.url;
  private query = {
    key: environment.api.key,
  };
  constructor(private http: HttpClient) {}
  getAll(aditionalParams: ApiParams = {}) {
    const params = {
      ...this.query,
      ...aditionalParams,
    };
    return this.http.get<ApiResponse<Tag[]>>(`${this.url}/tags`, { params });
  }
  getDetails(id: number | string) {
    return this.http.get<TagDetails>(`${this.url}/tags/${id}`, {
      params: this.query,
    });
  }
}
