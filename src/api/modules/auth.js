// @flow
import API from '../base/api';
import type {ReqTypeT} from '../index';
import {SERVER} from '../../constants/data';

class AuthApi extends API {
  async login(data) {
    return this.r({
      method: 'POST',
      url: `${SERVER}/api/login`,
      data,
    });
  }
}

export default function authApi(request: ReqTypeT) {
  return new AuthApi(request);
}
