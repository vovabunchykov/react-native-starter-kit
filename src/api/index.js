// @flow
import axios from 'axios';

import auth from './modules/auth';

export type ReqTypeT = (config: Object) => Promise<*>;

class Client {
  token: ?string;
  req: ReqTypeT;
  auth: *;

  constructor(baseURL: ?string = '') {
    this.req = axios.create({
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
      },
      baseURL,
    });
    this.req.interceptors.request.use((config) => {
      if (!this.token) {
        return config;
      }
      config.headers = Object.assign({}, config.headers, {
        Authorization: `Bearer ${this.token}`,
      });
      return config;
    });
    this.auth = auth(this.req);
  }
  setToken(token: string): void {
    this.token = token;
  }

  deleteToken(): void {
    this.token = null;
  }
}

let instance;
export default function api(baseUrl: ?string) {
  if (!instance) {
    instance = new Client(baseUrl);
  }
  return instance;
}
