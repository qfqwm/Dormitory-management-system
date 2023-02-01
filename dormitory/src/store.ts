import { defineStore } from 'pinia';

const versionString = import.meta.env.MODE === 'development' ? import.meta.env.VITE_APP_VERSION + '-dev' : import.meta.env.VITE_APP_VERSION;

export const useStore = defineStore('main', {
  state: () => ({
    debug: import.meta.env.MODE === 'development',
    version: versionString,
    isInitialized: false,
    count: 0,
  }),

  actions: {
    initApp() {
      this.isInitialized = true;
      console.log('app initialized!');
    },

    increment(value = 1) {
      this.count += value;
    },
  },

  getters: {
    isReady: state => {
      return !state.isInitialized;
    },
  },
});

// export const mainStore = defineStore('main', {
//   state: () => {
//     return {
//       userInfo: {},
//     };
//   },

//   actions: {
//     setUserInfo(uInfo: any) {
//       this.$state.userInfo = uInfo;
//     },
//   },

//   getters: {},
// });

export const mainStore = defineStore('main', {
  /**
   * 类似组件的 data, 用于存储全局的的状态
   * 注意:
   *    1.必须是函数, 为了在服务端渲染的时候避免交叉请求导致的数据交叉污染
   *    2.必须是箭头函数, 为了更好的 TS 类型推导
   */
  state: () => {
    return {
      // dates: {
      //   name: '',
      //   account: '',
      //   password: '',
      //   phone: '',
      //   roomId: '',
      //   checkTime: '',
      //   menuList: [],
      //   role: '',
      // },
      total_date: {
        checkTime: '',
        menuList: [],
        name: '',
        password: '',
        phone: '',
        role: '',
        roomId: '',
        username: '',
      },
    };
  },
  /**
   * 类似组件的 computed, 用来封装计算属性, 具有缓存特性
   */
  getters: {},
  /**
   * 类似组件的 methods, 封装业务逻辑, 修改state
   * 注意: 里面的函数不能定义成箭头函数(函数体中会用到this)
   */
  actions: {
    changeState(num: object): void {
      // this访问当前容器的实例
      this.$state.total_date = num;
    },
    // changeState1(num: string): void {
    //   // this访问当前容器的实例
    //   this.$state.dates.description = num;
    // },
  },
  persist: {
    enabled: true, // 开启数据缓存
  },
});
