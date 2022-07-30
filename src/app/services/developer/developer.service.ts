import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiParams, ApiResponse } from 'src/app/interfaces/api';
import { Developer, DeveloperDetails } from 'src/app/interfaces/developer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  url = environment.api.url;
  querys = { key: environment.api.key };
  constructor(private http: HttpClient) {}

  getDevs(aditionalParams: ApiParams = {}) {
    const params = {
      ...this.querys,
      ...aditionalParams,
    };
    return this.http.get<ApiResponse<Developer[]>>(`${this.url}/developers`, {
      params,
    });
  }

  getDetails(id: string | number) {
    return this.http.get<DeveloperDetails>(`${this.url}/developers/${id}`, {
      params: this.querys,
    });
  }
}
