import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityWeatherDto } from '../models';
import { API_BASE_PATH } from '../tokens';

@Injectable({
  providedIn: 'root'
})
export class PortalApiService {
  static lat: string = '55.755819';
  static lon: string = '37.617644';
  static lang: string = 'en_US';
  static limit: number = 7;

  constructor(
    @Inject(API_BASE_PATH) private readonly apiPath: string,
    private readonly httpClient: HttpClient
  ) { }

  getWeatherForecast(days?: number): Observable<CityWeatherDto> {
    const url: string = [
      `${this.apiPath}/forecast?`,
      `lat=${PortalApiService.lat}`,
      `&lon=${PortalApiService.lon}`,
      `&lang=${PortalApiService.lang}`,
      `&limit=${days || PortalApiService.limit}`
    ].join('');

    return this.httpClient.get(url) as Observable<CityWeatherDto>;
  }
}
