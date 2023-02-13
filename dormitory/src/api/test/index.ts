// todo 实现封装一个axios
import api from '@/utils/axios';
import { GetAccountInfoModel, updataModel, floormanagements, DormitoryInfos, Appraises, Earlys } from './model';

enum Api {
  // 用户登录
  Login = '/user/login',
  Updata = '/user/updata',

  //管理员
  Overview = '/admin/overview',
  Floormanagement = '/admin/floor',
  DormitoryInfo = '/admin/dormitoryInfo',
  Appraise = '/admin/appraise',
  Early = '/admin/early',
  Late = '/admin/late',
  Sweep = '/admin/sweep',
}

//用户登录
//登录
export const login = (object: object) => api.post<GetAccountInfoModel>(Api.Login, object);
//修改密码
export const updata = (object: object) => api.put<updataModel>(Api.Updata, object);

//管理员
//概览
export const overview = (dormitory: number) => api.get<floormanagements>(Api.Overview, { params: { dormitory: dormitory } });
//楼层管理
export const floormanagement = (dormitory: number) => api.get<floormanagements>(Api.Floormanagement, { params: { dormitory: dormitory } });
//宿舍基本信息
export const dormitoryInfos = (object: object) => api.post<DormitoryInfos>(Api.DormitoryInfo, object);
//提交评价
export const appraise = (object: object) => api.post<Appraises>(Api.Appraise, object);
//查看学生早起记录
export const early = (userId: number) => api.get<Earlys>(Api.Early, { params: { userId: userId } });
//查看学生晚归记录
export const late = (userId: number) => api.get<Earlys>(Api.Late, { params: { userId: userId } });
//查看学生打扫记录
export const sweep = (userId: number) => api.get<Earlys>(Api.Sweep, { params: { userId: userId } });
