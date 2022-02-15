import { EnvironmentProperties } from '../app/core/models';

const props = {
  production: false,
  portalApiRestUrl: 'http://localhost:4200/api',
  yandexId: '6c431c7a-0131-4fd1-bd5c-6cc3126963ad'
};

export const environment: Readonly<EnvironmentProperties> = Object.freeze(props);
