<!-- eslint-disable vue/v-on-event-hyphenation -->
<template>
  <div class="all">
    <div class="content">
      <h2>宿舍云平台</h2>
      <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="用户" name="username" :rules="[{ required: true, message: '请输入您的账号！' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入您的账密码！' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
  import router from '@/router';
  import { login } from '../../api/test/index';
  import { reactive } from 'vue';

  interface FormState {
    username: string;
    password: string;
  }

  const formState = reactive<FormState>({
    username: '',
    password: '',
  });
  // const role = ref('');
  const onFinish = (values: any) => {
    login(formState).then((res: any) => {
      console.log(res.data.data, 'qwe');
      if (res.data.code == 200) {
        console.log('Success:', values);
        sessionStorage.setItem('token', 'user');
        router.push('/layout');
      } else {
        console.log('账号或者密码错误！');
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
</script>
<style lang="less" scoped>
  @import './index.less';
</style>
