// import { Data } from 'ant-design-vue/lib/_util/type';

export interface GetAccountInfoModel {
  username: string;
  password: string;
}

export interface updataModel {
  username: string;
  phone: string;
  password: string;
  newpassword: string;
}

export interface floormanagements {
  dormitory: number;
}

export interface DormitoryInfos {
  dormitory: number;
  roomId: number;
}

export interface Appraises {
  dormitory: number;
  roomId: number;
  creator: string;
  score: number;
  note: string;
  subtime: any;
}

export interface Earlys {
  userId: number;
}
