import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
const store = createPinia();
store.use(piniaPluginPersist);
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';
import './assets/index.postcss';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from '@ant-design/icons-vue';

const head = createHead();
const app = createApp(App);

//获取缓存信息
const menuList = JSON.parse(sessionStorage.getItem('menuList') as any);
// const modules = import.meta.glob('../pages/*/*.vue');
if (menuList) {
  //动态加载路由
  menuList.forEach((h: any) => {
    router.addRoute('layout', {
      path: h.url,
      name: h.names,
      // component: () => import('./pages/CleaningFrequency/index.vue'),
      // component: modules[`@/pages${h.component}`],
      component: () => import(`./pages${h.component}`),
    });
  });
}

app.use(store);
app.use(router);
app.use(head);
app.use(Antd);

nextTick(() => {
  // 配置全局对象
  app.config.globalProperties.$icons = Icons;
  // Antd 注入全部图标（这样注入之后，就可以全局直接使用 icon 组件，不需要每个页面去引入了）
  for (const key in Icons) {
    app.component(key, Icons[key]);
  }
});

const whileList = ['/']; //白名单，允许进入的路径

router.beforeEach((to, from, next) => {
  if (whileList.includes(to.path) || sessionStorage.getItem('token')) {
    next();
  } else {
    next('/');
  }
});

app.mount('#app');
