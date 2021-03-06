import { EnvironmentProperties } from '../app/core/models';

const props = {
  production: true,
  portalApiRestUrl: 'http://localhost:4200/api',
  yandexId: ''
};

export const environment: Readonly<EnvironmentProperties> = Object.freeze(props);
