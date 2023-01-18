<template>
  <div>
    <a-layout class="layout">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo">寝室云平台</div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <router-link to="/fillinfo">
              <user-outlined />
              <span>概览</span>
              <!-- <router-link to="/test">概览</router-link> -->
            </router-link>
          </a-menu-item>

          <a-menu-item key="2">
            <router-link to="/getClock">
              <video-camera-outlined />
              <span>起床记录</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/registration">
              <video-camera-outlined />
              <span>归宿记录</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link to="/clean">
              <video-camera-outlined />
              <span>打扫记录</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="5">
            <router-link to="/overview">
              <video-camera-outlined />
              <span>概览</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="6">
            <router-link to="/floorManagement">
              <video-camera-outlined />
              <span>楼层管理</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="7">
            <router-link to="/dormitoryInfo">
              <video-camera-outlined />
              <span>宿舍基本信息</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <router-link to="/viewStudentInfo">
              <video-camera-outlined />
              <span>学生信息</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="9">
            <router-link to="/early">
              <video-camera-outlined />
              <span>起床记录</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="10">
            <router-link to="/studentsReturnlate">
              <video-camera-outlined />
              <span>归寝记录</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="11">
            <router-link to="/cleaningFrequency">
              <video-camera-outlined />
              <span>打扫记录</span>
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
  import { ref } from 'vue';
  import { UserOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined, FullscreenOutlined } from '@ant-design/icons-vue';
  import router from '@/router';
  import Models from '../components/Model.vue';

  const selectedKeys = ref<string[]>(['1']);
  const collapsed = ref<boolean>(false);

  //退出登录
  const quit = () => {
    sessionStorage.removeItem('token');
    router.push('/');
  };
</script>
<style lang="less" scoped>
  .layout {
    width: 100%;
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
