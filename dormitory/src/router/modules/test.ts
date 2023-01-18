import Index from '@/pages/Login/Index.vue';
// import router from '@/router';
// import { mainStore } from '../../store';

const routes = [
  {
    //登陆页面
    path: '/',
    name: 'login',
    component: Index,
    // meta: {
    //   // requireAuth: true,
    //   roles: ['admin'],
    // },
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/components/Layout.vue'),
    redirect: '/fillinfo',
    children: [
      //学生
      {
        path: '/fillinfo',
        name: 'fillinfo',
        component: () => import('@/pages/student/FillInfo/index.vue'),
      },
      {
        path: '/getClock',
        name: 'getClock',
        component: () => import('@/pages/student/GetClock/index.vue'),
      },
      {
        path: '/registration',
        name: 'registration',
        component: () => import('@/pages/student/Registration/index.vue'),
      },
      {
        path: '/clean',
        name: 'clean',
        component: () => import('@/pages/student/Clean/index.vue'),
      },

      //管理员
      {
        path: '/overview',
        name: 'overview',
        component: () => import('@/pages/admin/Overview/index.vue'),
      },
      {
        path: '/floorManagement',
        name: 'floorManagement',
        component: () => import('@/pages/admin/FloorManagement/index.vue'),
      },
      {
        path: '/dormitoryInfo',
        name: 'dormitoryInfo',
        component: () => import('@/pages/admin/DormitoryInfo/index.vue'),
      },
      {
        path: '/viewStudentInfo',
        name: 'viewStudentInfo',
        component: () => import('@/pages/admin/ViewStudentInfo/index.vue'),
      },
      {
        path: '/early',
        name: 'early',
        component: () => import('@/pages/admin/Early/index.vue'),
      },
      {
        path: '/studentsReturnlate',
        name: 'studentsReturnlate',
        component: () => import('@/pages/admin/StudentsReturnlate/index.vue'),
      },
      {
        path: '/cleaningFrequency',
        name: 'cleaningFrequency',
        component: () => import('@/pages/admin/CleaningFrequency/index.vue'),
      },
    ],
  },
];

// router.beforeEach((to, from, next) => {
//   const userInfos = mainStore();
//   console.log(userInfos.$state.userInfo, 'asd');
// });

export default routes;
