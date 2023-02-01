<template>
  <div class="all">
    <div class="top">
      <h2>个人记录</h2>
      <div class="top_2">
        <div class="left">
          <a-button type="text" shape="circle" class="cri"
            ><p>今日打卡</p>
            {{ nowTime }}
          </a-button>
        </div>
        <div class="right">
          <div class="right_1">
            <p class="right_1_1">个人打扫概率</p>
            <p class="right_1_2">0.00%</p>
            <a-space class="right_1_3">
              <a-select ref="select" v-model:value="value1" style="width: 220px" @change="handleChange">
                <a-select-option value="jack1">最近2天</a-select-option>
                <a-select-option value="jack">最近4天</a-select-option>
                <a-select-option value="lucy">最近6天</a-select-option>
                <a-select-option value="Yiminghe">最近8天</a-select-option>
              </a-select>
            </a-space>
          </div>
          <div class="right_2">
            <div class="right_2_1">asd</div>
            <div class="right_2_1">asd</div>
            <div class="right_2_1">asd</div>
            <div class="right_2_1">asd</div>
            <div class="right_2_1">asd</div>
            <div class="right_2_1">asd</div>
            <div class="right_2_1">asd</div>
            <div class="right_2_1">asd</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>打扫历史记录</h2>
      <div class="footer_2">
        <a-table :columns="columns" :data-source="data" :style="{ width: '100%' }" :pagination="false">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <smile-outlined />
                Name
              </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'tags'">
              <span>
                <a-tag v-for="tag in record.tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                  {{ tag.toUpperCase() }}
                </a-tag>
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <a>Invite 一 {{ record.name }}</a>
                <a-divider type="vertical" />
                <a>Delete</a>
                <a-divider type="vertical" />
                <a class="ant-dropdown-link">
                  More actions
                  <down-outlined />
                </a>
              </span>
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
  import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
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
      name: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: 'Action',
      key: 'action',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
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
      height: 50%;
      margin: 0 0 20px 0;

      h2 {
        font-weight: 550;
        margin: 10px 0 0 10px;
        font-size: 30px;
      }

      .top_2 {
        display: flex;
        width: 100%;
        height: 85%;
        margin: 10px 0 0 0;

        .left {
          margin: 20px;
          width: 20%;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;

          .cri {
            width: 75%;
            height: 75%;
            background-color: gray;
            color: white;
            p {
              font-size: 30px;
            }
          }
        }
        .right {
          display: flex;
          margin: 20px 20px 20px 0;
          width: 80%;
          background-color: white;

          .right_1 {
            width: 20%;
            height: 90%;
            margin: 15px;
            text-align: center;
            box-shadow: 10px 10px 10px 10px pink;
            background-color: white;

            .right_1_1 {
              padding: 20px 0;
              font-size: 20px;
            }

            .right_1_2 {
              padding: 20px 0;
              font-size: 40px;
            }
          }

          .right_2 {
            display: flex;
            width: 80%;
            height: 90%;
            margin: 15px 15px 0 0;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-around;

            .right_2_1 {
              width: 48%;
              height: 15%;
              margin: 10px;
              background-color: #f1f1f1;
            }
          }
        }
      }
    }
    .footer {
      width: 100%;
      height: 50%;
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
