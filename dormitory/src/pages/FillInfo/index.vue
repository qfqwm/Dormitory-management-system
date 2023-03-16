<template>
  <div class="all">
    <div class="top">
      <!-- <image
        class="header-img"
        src="https://ts1.cn.mm.bing.net/th/id/R-C.78e0b138bda78c09dc6709443eaead4d?rik=QE%2bAyMSYbeLxoA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180502%2f6987999559df4b029d6384af92014e38.jpeg&ehk=55vvPhv2fPV82Lo1MvLtuqAve6R%2fDHVHGGG%2bpxwVsRA%3d&risl=&pid=ImgRaw&r=0"
      ></image> -->
      <div class="left"><img class="header-img" src="../../assets/22.jpg" alt="找不到图片" /></div>
      <div class="right">
        <p>{{ name }}</p>
        <!-- <p>用户信息填写</p> -->
      </div>
    </div>
    <div class="footer">
      <h2>用户个人信息</h2><hr />
      <a-form class="form" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 10 }" autocomplete="off" @finish="onFinish">
        <a-form-item label="学生姓名" name="name">
          <a-input v-model:value="formState.name" disabled="disabled" />
        </a-form-item>

        <a-form-item label="联系电话" name="phone">
          <a-input v-model:value="formState.phone" disabled="disabled" />
        </a-form-item>

        <a-form-item label="学号" name="password">
          <a-input v-model:value="formState.studentId" disabled="disabled" />
        </a-form-item>

        <a-form-item label="入住时间" name="checkTime">
          <a-input v-model:value="formState.checkTime" disabled="disabled" />
        </a-form-item>

        <!-- <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">提交信息</a-button>
        </a-form-item> -->
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { mainStore } from '@/store';
  const mainStoreI = mainStore();
  const name = ref('');
  onMounted(() => {
    name.value = mainStoreI.$state.total_date.name;
    Object.keys(formState).map(key => {
      formState[key] = mainStoreI.total_date[key];
    });
  });

  //修改密码（表单验证）
  interface FormState {
    name: string;
    password: string;
    studentId: string;
    phone: string;
    checkTime: string;
  }
  const formState = reactive<FormState>({
    name: '',
    password: '',
    studentId: '',
    phone: '',
    checkTime: '',
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
</script>
<style lang="less" scoped>
  .all::-webkit-scrollbar {
    display: none;
  }
  .all {
    display: flex;
    overflow: hidden; // 隐藏超出部分
    overflow-y: scroll;
    width: 100%;
    height: 100vh;
    max-height: 100%; // 你可以设置固定或者最大最小高度
    flex-direction: column;

    .top {
      width: 100%;
      height: 30%;
      display: flex;
      align-items: center;
      // background-color: blue;

      .left {
        margin: 0 40px 0 40px;
        .header-img {
          float: left;
          border: black solid 1px;
          width: 200px;
          height: 200px;
          // box-shadow: 10px 5px 5px 5px pink;
          object-fit: cover;
          /*图片完全填充*/
          /*object-position: center;*/
          /*设置头像选取照片的哪个区域object-position: x y*/
          border-radius: 50%;
          /*头像框圆形设置*/
        }
      }

      .right {
        text-align: center;

        p:nth-child(1) {
          font-size: 50px;
        }
      }
    }

    .footer {
      width: 100%;
      // height: 68%;
      background-color: white;
      margin: 20px 0 0 0;

      h2 {
        font-weight: 600;
        font-size: 40px;
        margin: 10px;
      }

      // .form {
      //   /deep/.ant-col-8 {
      //     display: block;
      //     flex: 0 0 10.333333%;
      //     max-width: 10.333333%;
      //   }
      // }
    }
  }
</style>
