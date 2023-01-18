// todo 实现封装一个axios
import api from '@/utils/axios';
import { GetAccountInfoModel } from './model';

enum Api {
  // ACCOUNT_INFO = '/account/getAccountInfo',
  // SESSION_TIMEOUT = '/user/sessionTimeout',
  // TOKEN_EXPIRED = '/user/tokenExpired',
  // 码表模糊查询
  Login = '/user/login',
}
export const login = (object: object) => api.post<GetAccountInfoModel>(Api.Login, object);

// export const selectCodeTable = (object: object) => api.post(Api.Code_Table_Fuzzy_Query, object);
