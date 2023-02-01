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
                  <a-select-option value="jack1">和园一号</a-select-option>
                  <a-select-option value="jack">和园二号</a-select-option>
                  <a-select-option value="lucy">和园三号</a-select-option>
                  <a-select-option value="Yiminghe">和园四号</a-select-option>
                </a-select>
              </a-space>
            </div>
            <div>
              楼层
              <a-space class="right_1_3">
                <a-select ref="select" v-model:value="value1" style="width: 220px" @change="handleChange">
                  <a-select-option value="jack1">和园一号</a-select-option>
                  <a-select-option value="jack">和园二号</a-select-option>
                  <a-select-option value="lucy">和园三号</a-select-option>
                  <a-select-option value="Yiminghe">和园四号</a-select-option>
                </a-select>
              </a-space>
            </div>
            <div>
              房间
              <a-space class="right_1_3">
                <a-select ref="select" v-model:value="value1" style="width: 220px" @change="handleChange">
                  <a-select-option value="jack1">和园一号</a-select-option>
                  <a-select-option value="jack">和园二号</a-select-option>
                  <a-select-option value="lucy">和园三号</a-select-option>
                  <a-select-option value="Yiminghe">和园四号</a-select-option>
                </a-select>
              </a-space>
            </div>
            <div>
              学生
              <a-space class="right_1_3">
                <a-select ref="select" v-model:value="value1" style="width: 220px" @change="handleChange">
                  <a-select-option value="jack1">和园一号</a-select-option>
                  <a-select-option value="jack">和园二号</a-select-option>
                  <a-select-option value="lucy">和园三号</a-select-option>
                  <a-select-option value="Yiminghe">和园四号</a-select-option>
                </a-select>
              </a-space>
            </div>
            <div>
              日期
              <a-space class="right_1_3">
                <a-range-picker v-model:value="value2" />
              </a-space>
            </div>
          </div>
          <div>
            <a-button type="primary" shape="round">记录查询</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>记录详情</h2>
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
  //   import { HomeOutlined, DeploymentUnitOutlined, DatabaseOutlined, UserDeleteOutlined } from '@ant-design/icons-vue';
  import type { Dayjs } from 'dayjs';
  type RangeValue = [Dayjs, Dayjs];
  const value2 = ref<RangeValue>();

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
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '日期',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '时间',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
</script>
<style lang="less" scoped>
  .all::-webkit-scrollbar {
    display: none;
  }
  .all {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .top {
      width: 100%;
      height: 15%;
      margin: 0 0 20px 0;
      //   background-color: red;

      span {
        font-weight: 550;
        margin: 10px 20px 0 10px;
        font-size: 30px;
      }

      .top_2 {
        display: flex;
        width: 100%;
        height: 96%;
        margin: 10px 0 0 0;
        flex-direction: column;

        .top_2_2 {
          display: flex;
          height: 60%;
          padding: 0 10px;
          justify-content: space-between;
          align-items: center;
          background-color: white;

          .top_2_2_1 {
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
          }
        }
      }
    }
    .footer {
      width: 100%;
      height: 85%;
      //   background-color: red;

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
