import { InjectionToken } from '@angular/core';
import { environment } from 'projects/widgets/src/environments/environment.dev';

export function defaultApiBasePathFactory(): string {
  return '/api';
}

export const API_BASE_PATH: InjectionToken<string> =
  new InjectionToken<string>(
    'ApiBasePath',
    {
      providedIn: 'root',
      factory: defaultApiBasePathFactory
    }
  );

export function defaultYandexIdFactory(): string {
  return 'test';
}

export const YANDEX_ID: InjectionToken<string> =
  new InjectionToken<string>(
    'YandexId',
    {
      providedIn: 'root',
      factory: defaultYandexIdFactory
    }
  );

export function apiBasePathFactory(): string {
  return environment.portalApiRestUrl;
}

export function yandexIdFactory(): string {
  return environment.yandexId;
}
