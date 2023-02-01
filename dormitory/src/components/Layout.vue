<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo">寝室云平台</div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item v-for="(item1, index1) in menuList" :key="index1">
            <router-link :to="item1.url">
              <!-- <user-outlined /> -->
              <component :is="$icons[item1.icon]" />
              <span>{{ item1.name }}</span>
              <!-- <router-link to="/test">概览</router-link> -->
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0; display: flex; justify-content: space-between; align-items: center">
          <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <!-- <a-button type="link" @click="quit">个人信息</a-button> -->
          <a-dropdown>
            <a class="a" @click.prevent>
              <fullscreen-outlined :style="{ fontSize: '30px', color: 'gray' }" />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <Models />
                </a-menu-item>
                <a-menu-item>
                  <a-button type="text" @click="quit">退出登录</a-button>
                  <!-- <a @click="quit">退出登录</a> -->
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '15px', background: '#f1f1f1', minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  // import { UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined, FullscreenOutlined } from '@ant-design/icons-vue';
  import { useRouter } from 'vue-router';
  import Models from '../components/Model.vue';

  let $router = useRouter();

  const selectedKeys = ref<string[]>(['1']);
  const collapsed = ref<boolean>(false);

  //获取缓存信息
  let menuList = JSON.parse(sessionStorage.getItem('menuList') as any);

  //退出登录
  const quit = () => {
    sessionStorage.clear(); //清空sessionStorage中所有信息
    $router.push('/');
  };

  onMounted(() => {
    // const modules = import.meta.glob('../pages/*/*.vue');
    //动态加载路由
    menuList.forEach((h: any) => {
      $router.addRoute('layout', {
        path: h.url,
        name: h.names,
        component: () => import(`../pages${h.component}`),
      });
    });
  });
</script>
<style lang="less" scoped>
  .layout {
    width: 100vw;
    height: 100vh;

    .a {
      margin-right: 50px;
    }
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    width: 100%;
    height: 6%;
    background: rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 60px;
  }

  .site-layout-background {
    background: #fff;
  }
</style>
