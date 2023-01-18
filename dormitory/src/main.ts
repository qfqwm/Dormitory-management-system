import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';
import './assets/index.postcss';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const head = createHead();
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(head);
app.use(Antd);

const whileList = ['/']; //白名单，允许进入的路径

router.beforeEach((to, from, next) => {
  if (whileList.includes(to.path) || sessionStorage.getItem('token')) {
    next();
  } else {
    next('/');
  }

  //   if (to.meta.permission.length > 0) {
  //     //权限
  //     const user = JSON.parse(sessionStorage.getItem('token'));
  //     console.log(user);

  //     if (!to.meta.permission.includes(user)) {
  //       next({
  //         path: '/',
  //       });
  //     }
  //   }
  //   next();
});

app.mount('#app');
