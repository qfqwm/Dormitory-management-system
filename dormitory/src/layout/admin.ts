export interface DataItem {
  name: string;
  username: string;
  phone: string;
  checkTime: string;
}
export interface DataItems {
  score: number;
  note: number;
  creator: string;
  subtime: any;
}

export interface FormState {
  dormitory: number;
  roomId: number;
  creator: string;
  note: string;
  score?: string;
  subtime: any;
}
