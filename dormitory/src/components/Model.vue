<template>
  <a-button type="text" @click="showModal">个人中心</a-button>
  <a-modal v-model:visible="visible" title="个人信息" ok-text="确认" cancel-text="取消" width="1000px" @ok="handleOk">
    <div class="all">
      <div class="left">
        <h2>关于用户</h2><hr />
        <div class="clearfix">
          <a-upload v-model:file-list="fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" list-type="picture-card" @preview="handlePreview">
            <div v-if="fileList.length < 1">
              <plus-outlined />
            </div>
          </a-upload>
          <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
          <p>欢迎您，新用户</p>
          <p>Student</p>
        </div>
        <div class="left_footer">
          <h3>个人绩效</h3><hr />
          <p>早起率：<a-progress :percent="70" /> </p>
          <p>早归率：<a-progress :percent="50" status="active" /></p>
          <p>打扫频率：<a-progress :percent="50" status="active" /></p>
        </div>
      </div>
      <div class="right">
        <h2>账户信息</h2><hr />

        <a-form class="form" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish">
          <a-form-item label="用户名" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item label="手机号" name="phone" :rules="[{ required: true, message: 'Please input your Phone!' }]">
            <a-input v-model:value="formState.phone" />
          </a-form-item>

          <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item label="新密码" name="newpassword" :rules="[{ required: true, message: 'Please input your newpassword!' }]">
            <a-input-password v-model:value="formState.newpassword" />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">更新</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </a-modal>
</template>
<script setup lang="ts">
  import { PlusOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  import { reactive } from 'vue';
  import type { UploadProps } from 'ant-design-vue';

  const visible = ref<boolean>(false);
  const showModal = () => {
    visible.value = true;
  };

  const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
  };

  //上传头像
  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const previewVisible = ref(false);
  const previewImage = ref('');
  const previewTitle = ref('');

  const fileList = ref<UploadProps['fileList']>([]);

  const handleCancel = () => {
    previewVisible.value = false;
    previewTitle.value = '';
  };
  const handlePreview = async (file: UploadProps['fileList'][number]) => {
    if (!file.url && !file.preview) {
      file.preview = (await getBase64(file.originFileObj)) as string;
    }
    previewImage.value = file.url || file.preview;
    previewVisible.value = true;
    previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
  };

  //修改密码（表单验证）
  interface FormState {
    username: string;
    password: string;
    newpassword: string;
    phone: string;
  }
  const formState = reactive<FormState>({
    username: '',
    password: '',
    newpassword: '',
    phone: '',
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
</script>
<style lang="less" scoped>
  .all {
    display: flex;
    width: 100%;
    height: 100%;
    .left {
      width: 30%;
      height: 100%;
      background-color: white;

      h2 {
        font-weight: 600;
        margin: 10px;
      }

      .clearfix {
        height: 45%;
        // background-color: red;
        text-align: center;
        margin: 20px;
      }
      .left_footer {
        height: 43%;
        margin: 20px;
        // background-color: gray;
      }

      .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
      }

      .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
      }
    }
    .right {
      width: 70%;
      height: 100%;
      margin: 0 20px;
      background-color: white;

      h2 {
        font-weight: 600;
        margin: 10px;
      }

      .form {
        /deep/.ant-col-8 {
          display: block;
          flex: 0 0 10.333333%;
          max-width: 10.333333%;
        }
      }
    }
  }
</style>
