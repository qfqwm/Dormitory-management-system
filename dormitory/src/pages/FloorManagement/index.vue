<template>
  <div class="all">
    <div class="top">
      <h2>楼层管理</h2>
      <div class="top_2">
        <div>
          宿舍楼
          <a-space class="right_1_3">
            <a-select ref="select" v-model:value="value1" style="width: 220px" @change="handleChange">
              <a-select-option value="1">和园一号</a-select-option>
              <a-select-option value="2">和园二号</a-select-option>
              <a-select-option value="3">和园三号</a-select-option>
              <a-select-option value="4">和园四号</a-select-option>
            </a-select>
          </a-space>
        </div>
        <div>
          <a-button type="primary" shape="round" @click="getdata">获取数据</a-button>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>楼层信息</h2>
      <div class="footer_2">
        <div v-for="(item, index) in datas" :key="index" class="test">
          <span>楼层：{{ item.floorId }}层</span><hr />
          <a-button v-for="(item2, index2) in item.number" :key="index2" type="primary" class="button">{{ item2 }}</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { formateDate } from '@/layout/time';
  import { ref, onMounted } from 'vue';
  import { floormanagement } from '../../api/test/index';
  //   import { ApartmentOutlined, AlignLeftOutlined, AppstoreOutlined, TeamOutlined } from '@ant-design/icons-vue';
  const nowTime = ref('');
  onMounted(() => {
    setInterval(() => {
      nowTime.value = formateDate(new Date());
    });
    getdata();
  });

  const value1 = ref('1');
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const datas = ref<any>('');
  const test = ref({});
  const getdata = () => {
    floormanagement(Number(value1.value)).then((res: any) => {
      console.log(res.data.message, 'asd');
      res.data.message.forEach((item: { number: any }) => {
        test.value = item.number;
        item.number = JSON.parse(JSON.stringify(test.value)).split(',');
      });
      datas.value = res.data.message;
    });
  };
</script>
<style lang="less" scoped>
  .all {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .top {
      width: 100%;
      height: 20%;
      margin: 0 0 20px 0;
      //   background-color: wheat;

      h2 {
        font-weight: 550;
        margin: 10px 20px 0 10px;
        font-size: 30px;
      }

      .top_2 {
        display: flex;
        width: 100%;
        height: 60%;
        margin: 10px 0 0 0;
        padding: 0 10px;
        background-color: white;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
    .footer {
      width: 100%;
      height: 80%;
      //   background-color: gray;

      h2 {
        font-weight: 550;
        margin: 10px 0 0 10px;
        font-size: 30px;
      }
      .footer_2::-webkit-scrollbar {
        display: none;
      }

      .footer_2 {
        // display: flex;
        width: 100%;
        // height: 85%;
        margin: 10px 0 0 0;
        // background-color: red;
        max-height: 90%; // 你可以设置固定或者最大最小高度
        overflow: hidden; // 隐藏超出部分
        overflow-y: scroll;

        .test {
          //   width: 90%;
          height: 200px;
          margin: 0 20px 20px 20px;
          background-color: white;

          span {
            font-size: 20px;
            font-weight: 550;
            margin: 0 10px;
          }

          .button {
            margin: 10px;
          }
        }
      }
    }
  }
</style>
