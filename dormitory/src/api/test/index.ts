// todo 实现封装一个axios
import api from '@/utils/axios';
import { GetAccountInfoModel, updataModel, floormanagements, DormitoryInfos } from './model';

enum Api {
  // 用户登录
  Login = '/user/login',
  Updata = '/user/updata',

  //管理员
  Floormanagement = '/admin/floor',
  DormitoryInfo = '/admin/dormitoryInfo',
}

//用户登录
//登录
export const login = (object: object) => api.post<GetAccountInfoModel>(Api.Login, object);
//修改密码
export const updata = (object: object) => api.put<updataModel>(Api.Updata, object);

//管理员
//楼层管理
export const floormanagement = (dormitory: number) => api.get<floormanagements>(Api.Floormanagement, { params: { dormitory: dormitory } });
//宿舍基本信息
export const dormitoryInfos = (object: object) => api.post<DormitoryInfos>(Api.DormitoryInfo, object);
