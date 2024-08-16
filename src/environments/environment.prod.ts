import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  baseUrl: 'https://localhost:7000/api',


};
