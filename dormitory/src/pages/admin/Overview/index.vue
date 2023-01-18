<template>
  <div class="all">
    <div class="top">
      <span>个人记录</span>
      <a-space class="right_1_3">
        <a-select ref="select" v-model:value="value1" style="width: 220px" @change="handleChange">
          <a-select-option value="jack1">和园一号</a-select-option>
          <a-select-option value="jack">和园二号</a-select-option>
          <a-select-option value="lucy">和园三号</a-select-option>
          <a-select-option value="Yiminghe">和园四号</a-select-option>
        </a-select>
      </a-space>
      <div class="top_2">
        <div class="top_2_1">
          <div>
            <apartment-outlined :style="{ fontSize: '160px', color: '#08c' }" />
          </div>
          <div>
            <p class="top_2_1_1">宿舍楼名</p>
            <p class="top_2_1_2">和园一号</p>
          </div>
        </div>
        <div class="top_2_1">
          <div>
            <align-left-outlined :style="{ fontSize: '160px', color: '#08c' }" />
          </div>
          <div>
            <p class="top_2_1_1">楼层数</p>
            <p class="top_2_1_2">10</p>
          </div>
        </div>
        <div class="top_2_1">
          <div>
            <appstore-outlined :style="{ fontSize: '160px', color: '#08c' }" />
          </div>
          <div>
            <p class="top_2_1_1">房间数</p>
            <p class="top_2_1_2">100</p>
          </div>
        </div>
        <div class="top_2_1">
          <div>
            <team-outlined :style="{ fontSize: '160px', color: '#08c' }" />
          </div>
          <div>
            <p class="top_2_1_1">学生数</p>
            <p class="top_2_1_2">6</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>最新动态</h2>
      <div class="footer_2">
        <a-table :columns="columns" :data-source="data" :style="{ width: '100%' }" :pagination="false">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>姓名</span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-if="column.key === 'room'">
              <a>
                {{ record.room }}
              </a>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { formateDate } from '@/layout/time';
  import { ref, onMounted } from 'vue';
  import { ApartmentOutlined, AlignLeftOutlined, AppstoreOutlined, TeamOutlined } from '@ant-design/icons-vue';
  const nowTime = ref('');
  onMounted(() => {
    setInterval(() => {
      nowTime.value = formateDate(new Date());
    });
  });

  const value1 = ref('Yiminghe');
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const columns = [
    {
      name: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '学号',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '宿舍楼',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '楼层',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: '宿舍号',
      key: 'room',
      dataIndex: 'room',
    },
    {
      title: '日期',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: '时间',
      key: 'age',
      dataIndex: 'age',
    },
    {
      title: '是否早起',
      key: 'age',
      dataIndex: 'age',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      room: '101',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      room: '101',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      room: '101',
    },
  ];
</script>
<style lang="less" scoped>
  .all {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .top {
      width: 100%;
      height: 30%;
      margin: 0 0 20px 0;

      span {
        font-weight: 550;
        margin: 10px 20px 0 10px;
        font-size: 30px;
      }

      .top_2 {
        display: flex;
        width: 100%;
        height: 85%;
        margin: 10px 0 0 0;
        // background-color: aquamarine;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        .top_2_1 {
          display: flex;
          width: 23%;
          height: 85%;
          background-color: white;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;

          .top_2_1_1 {
            font-size: 20px;
            color: gray;
          }
          .top_2_1_2 {
            font-size: 25px;
            font-weight: 550;
          }
        }
      }
    }
    .footer {
      width: 100%;
      height: 70%;
      //   background-color: gray;

      h2 {
        font-weight: 550;
        margin: 10px 0 0 10px;
        font-size: 30px;
      }

      .footer_2 {
        display: flex;
        width: 100%;
        height: 85%;
        margin: 10px 0 0 0;
        // background-color: red;
      }
    }
  }
</style>
