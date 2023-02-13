<template>
  <div class="all">
    <div class="top">
      <span>记录筛选器</span>
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
                <a-select ref="select" v-model:value="value4" style="width: 220px" @change="handleChange4">
                  <a-select-option v-for="(item, index) in user" :key="index" :value="item">{{ item }}</a-select-option>
                </a-select>
              </a-space>
            </div>

            <div>
              日期
              <a-space class="right_1_3">
                <a-range-picker v-model:value="value5" />
              </a-space>
            </div>
          </div>
          <div>
            <a-button type="primary" shape="round" @click="getdata">记录查询</a-button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="switchs" class="footer">
      <h2>记录详情</h2>
      <div class="footer_2">
        <a-table :columns="columns" :data-source="dataSource" :style="{ width: '100%' }" :pagination="false">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-if="column.key === 'checkTime'">
              <span>{{ record.time.slice(0, 2) < 9 ? '是' : '否' }}</span>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { formateDate_data } from '@/layout/time';
  import { Ref, ref } from 'vue';
  import { floormanagement, dormitoryInfos, early } from '../../api/test/index';
  import { DataItem } from '@/layout/admin';
  import type { Dayjs } from 'dayjs';
  import { columns } from '@/layout/column';
  type RangeValue = [Dayjs, Dayjs];
  const value5 = ref<RangeValue>();

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
  const user = ref([]);
  const a = ref();
  const handleChange3 = () => {
    value4.value = '';
    user.value = [];
    info.dormitory = value1.value;
    info.roomId = value3.value;
    dormitoryInfos(info).then((res: any) => {
      console.log(res.data.message[0]);
      res.data.message[0].forEach((item: any) => {
        user.value.push(item.name);
      });
      a.value = res.data.message[0];
    });
    switchs.value = false;
  };

  const handleChange4 = (value: any) => {
    console.log(value);
    a.value.forEach((item: any) => {
      if (item.name == value) {
        userId.value = Number(item.studentId);
      }
    });
  };

  //搜索结果
  const userId = ref();
  const switchs = ref(false);
  const dataSource: Ref<DataItem[]> = ref([]);
  const getdata = () => {
    early(userId.value).then((res: any) => {
      res.data.message.forEach((item: any) => {
        item.data = formateDate_data(item.data);
      });
      dataSource.value = res.data.message;
      if (dataSource.value.length != 0) {
        switchs.value = true;
      }
      if (dataSource.value.length == 0) {
        switchs.value = false;
      }
    });
  };
</script>
<style lang="less" scoped>
  @import './index.less';
</style>
