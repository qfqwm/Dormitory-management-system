<template>
  <div class="all">
    <div class="top">
      <span>学生信息</span>
      <div class="top_2">
        <div class="top_2_2">
          <div class="top_2_2_1">
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
              楼层
              <a-space class="right_1_3">
                <a-select ref="select" v-model:value="value2" style="width: 220px" @change="handleChange2">
                  <a-select-option v-for="(item, index) in datas" :key="index" :value="item.floorId">{{ item.floorId }}层</a-select-option>
                </a-select>
              </a-space>
            </div>
            <div>
              房间
              <a-space class="right_1_3">
                <a-select ref="select" v-model:value="value3" style="width: 220px" @change="handleChange3">
                  <a-select-option v-for="(item, index) in roomId" :key="index" :value="item">{{ item }}</a-select-option>
                </a-select>
              </a-space>
            </div>
            <div>
              学生
              <a-space class="right_1_3">
                <a-select ref="select" v-model:value="value4" style="width: 220px">
                  <a-select-option v-for="(item, index) in user" :key="index" :value="item">{{ item }}</a-select-option>
                </a-select>
              </a-space>
            </div>
          </div>
          <div>
            <a-button type="primary" shape="round" @click="getdata">搜索</a-button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="switchs" class="footer">
      <h2>详细信息</h2>
      <div class="footer_2">
        <div class="footer_2_1">
          <div class="footer_2_1_1">
            <h2>用户信息</h2>
            <hr />
            <p
              >姓名：<span>{{ datainfo.name }}</span></p
            >
            <p
              >学号：<span>{{ datainfo.studentId }}</span></p
            >
            <p
              >手机号：<span>{{ datainfo.phone }}</span></p
            >
            <p
              >注册日期：<span>{{ datainfo.checkTime }}</span></p
            >
          </div>
          <div class="footer_2_1_2">
            <div class="top_2_1">
              <div>
                <home-outlined :style="{ fontSize: '80px', color: '#08c' }" />
              </div>
              <div>
                <p class="top_2_1_1">房间号</p>
                <p class="top_2_1_2">{{ datainfo.roomId }}</p>
              </div>
            </div>
            <div class="top_2_1">
              <div>
                <deployment-unit-outlined :style="{ fontSize: '80px', color: '#08c' }" />
              </div>
              <div>
                <p class="top_2_1_1">所在楼层</p>
                <p class="top_2_1_2">{{ datainfo.roomId.toString().slice(0, 1) }}层</p>
              </div>
            </div>
            <div class="top_2_1">
              <div>
                <database-outlined :style="{ fontSize: '80px', color: '#08c' }" />
              </div>
              <div>
                <p class="top_2_1_1">宿舍楼</p>
                <p class="top_2_1_2">和园{{ datainfo.buildingId }}号</p>
              </div>
            </div>
            <div class="top_2_1">
              <div>
                <user-delete-outlined :style="{ fontSize: '80px', color: '#08c' }" />
              </div>
              <div>
                <p class="top_2_1_1">入住日期</p>
                <p class="top_2_1_2">{{ datainfo.checkTime }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_2_2">
          <p>早起概率：<a-progress :percent="70" /> </p>
          <p>早归概率：<a-progress :percent="60" status="active" /></p>
          <p>打扫概率：<a-progress :percent="50" status="active" /></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { formateDate_data } from '@/layout/time';
  import { Ref, ref } from 'vue';
  import { floormanagement, dormitoryInfos } from '../../api/test/index';
  import { DataItem } from '@/layout/admin';
  import { HomeOutlined, DeploymentUnitOutlined, DatabaseOutlined, UserDeleteOutlined } from '@ant-design/icons-vue';

  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
  const value4 = ref('');
  const datas = ref<any>('');
  const test = ref<any>([]);
  const roomId = ref('');
  //选择宿舍楼
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    value2.value = '';
    value3.value = '';
    test.value = [];
    roomId.value = '';
    floormanagement(Number(value1.value)).then((res: any) => {
      res.data.message.forEach((item: { number: any }) => {
        test.value.push(JSON.parse(JSON.stringify(item.number)).split(','));
      });
      datas.value = res.data.message;
    });
    switchs.value = false;
  };
  //选择楼层
  const handleChange2 = (value: string) => {
    value3.value = '';
    test.value.forEach((item: any) => {
      if (value == item[0].slice(0, 1)) {
        roomId.value = item;
      }
    });
    switchs.value = false;
  };

  //选择房间
  const info = reactive({
    dormitory: '',
    roomId: '',
  });
  const dataSource: Ref<DataItem[]> = ref([]);
  const user = ref([]);
  const handleChange3 = () => {
    value4.value = '';
    user.value = [];
    info.dormitory = value1.value;
    info.roomId = value3.value;
    dormitoryInfos(info).then((res: any) => {
      res.data.message[0].forEach((item: any) => {
        user.value.push(item.name);
      });
      dataSource.value = res.data.message[0];
    });
    switchs.value = false;
  };

  //搜索结果
  const datainfo = reactive({ buildingId: 0, checkTime: '', name: '', phone: '', roomId: '', studentId: '' });
  const switchs = ref(false);
  const getdata = () => {
    dataSource.value.forEach((item: any) => {
      if (item.name == value4.value) {
        item.checkTime = formateDate_data(item.checkTime);
        Object.keys(datainfo).forEach(function (key) {
          datainfo[key] = item[key];
        });
      }
    });
    if (datainfo.name != '') {
      switchs.value = true;
    }
  };
</script>
<style lang="less" scoped>
  @import './index.less';
</style>
