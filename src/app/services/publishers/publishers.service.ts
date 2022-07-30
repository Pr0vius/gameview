import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiParams, ApiResponse } from 'src/app/interfaces/api';
import { Publisher, PublisherDetails } from 'src/app/interfaces/publisher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublishersService {
  url = environment.api.url;
  querys = { key: environment.api.key };
  constructor(private http: HttpClient) {}

  getDevs(aditionalParams: ApiParams = {}) {
    const params = {
      ...this.querys,
      ...aditionalParams,
    };
    return this.http.get<ApiResponse<Publisher[]>>(`${this.url}/publishers`, {
      params,
    });
  }

  getDetails(id: string | number) {
    return this.http.get<PublisherDetails>(`${this.url}/publishers/${id}`, {
      params: this.querys,
    });
  }
}
