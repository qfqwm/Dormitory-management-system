<template>
  <div class="all">
    <div class="top">
      <h2>楼层管理</h2>
      <div class="top_2">
        <div>
          宿舍楼
          <a-space class="right_1_3">
            <a-select ref="select" v-model:value="value1" style="width: 220px">
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
  import { ref, onMounted } from 'vue';
  import { floormanagement } from '../../api/test/index';
  onMounted(() => {
    getdata();
  });

  const value1 = ref('1');
  const datas = ref<any>('');
  const test = ref({});
  //获取楼层信息
  const getdata = () => {
    floormanagement(Number(value1.value)).then((res: any) => {
      res.data.message.forEach((item: { number: any }) => {
        test.value = item.number;
        item.number = JSON.parse(JSON.stringify(test.value)).split(',');
      });
      datas.value = res.data.message;
    });
  };
</script>
<style lang="less" scoped>
  @import './index.less';
</style>
