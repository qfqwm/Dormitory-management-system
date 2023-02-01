<template>
  <div class="all">
    <div class="top">
      <!-- <image
        class="header-img"
        src="https://ts1.cn.mm.bing.net/th/id/R-C.78e0b138bda78c09dc6709443eaead4d?rik=QE%2bAyMSYbeLxoA&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180502%2f6987999559df4b029d6384af92014e38.jpeg&ehk=55vvPhv2fPV82Lo1MvLtuqAve6R%2fDHVHGGG%2bpxwVsRA%3d&risl=&pid=ImgRaw&r=0"
      ></image> -->
      <div class="left"><img class="header-img" src="../../assets/22.jpg" alt="找不到图片" /></div>
      <div class="right">
        <p>张明</p>
        <p>用户信息填写</p>
      </div>
    </div>
    <div class="footer">
      <h2>用户指南</h2><hr />
      <a-form class="form" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 10 }" autocomplete="off" @finish="onFinish">
        <a-form-item label="学生姓名" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="联系电话" name="phone" :rules="[{ required: true, message: 'Please input your Phone!' }]">
          <a-input v-model:value="formState.phone" />
        </a-form-item>

        <a-form-item label="选择想要入住的寝室" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">提交信息</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup lang="ts">
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
</script>
<style lang="less" scoped>
  .all {
    display: flex;
    width: 100%;
    height: 100%;
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
      height: 68%;
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
