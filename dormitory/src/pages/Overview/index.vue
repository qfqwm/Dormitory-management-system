<template>
  <div class="all">
    <div class="top">
      <span>管理概览</span>
      <a-space class="right_1_3">
        <a-select ref="select" v-model:value="value1" style="width: 220px" @change="handleChange">
          <a-select-option value="1">和园一号</a-select-option>
          <a-select-option value="2">和园二号</a-select-option>
          <a-select-option value="3">和园三号</a-select-option>
          <a-select-option value="4">和园四号</a-select-option>
        </a-select>
      </a-space>
      <div v-show="value1" class="top_2">
        <div class="top_2_1">
          <div>
            <apartment-outlined :style="{ fontSize: '160px', color: '#08c' }" />
          </div>
          <div>
            <p class="top_2_1_1">宿舍楼名</p>
            <p class="top_2_1_2">和园{{ datasource.buildingId }}号</p>
          </div>
        </div>
        <div class="top_2_1">
          <div>
            <align-left-outlined :style="{ fontSize: '160px', color: '#08c' }" />
          </div>
          <div>
            <p class="top_2_1_1">楼层数</p>
            <p class="top_2_1_2">{{ datasource.floorId }}</p>
          </div>
        </div>
        <div class="top_2_1">
          <div>
            <appstore-outlined :style="{ fontSize: '160px', color: '#08c' }" />
          </div>
          <div>
            <p class="top_2_1_1">房间数</p>
            <p class="top_2_1_2">{{ datasource.number }}</p>
          </div>
        </div>
        <div class="top_2_1">
          <div>
            <team-outlined :style="{ fontSize: '160px', color: '#08c' }" />
          </div>
          <div>
            <p class="top_2_1_1">学生数</p>
            <p class="top_2_1_2">{{ datasource.peopleNum }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="value1" class="footer">
      <h2>最新动态</h2>
      <div class="footer_2">
        <a-table :columns="columns" :data-source="dataSources" :style="{ width: '100%' }" :pagination="false">
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
  import { ref, Ref } from 'vue';
  import { overview } from '@/api/test/index';
  import { DataItem } from '@/layout/admin';
  import { columns } from '@/layout/column';
  import { ApartmentOutlined, AlignLeftOutlined, AppstoreOutlined, TeamOutlined } from '@ant-design/icons-vue';

  const value1 = ref('');
  const datasource = reactive({ number: 0, peopleNum: '', floorId: 0, buildingId: 0 });
  const dataSources: Ref<DataItem[]> = ref([]);
  const handleChange = (value: string) => {
    overview(Number(value)).then((res: any) => {
      Object.keys(datasource).forEach(function (key) {
        datasource[key] = res.data.message[0][key];
      });
      res.data.message[1].forEach((item: any) => {
        item.data = formateDate_data(item.data);
      });
      dataSources.value = res.data.message[1];
    });
  };
</script>
<style lang="less" scoped>
  @import './index.less';
</style>
