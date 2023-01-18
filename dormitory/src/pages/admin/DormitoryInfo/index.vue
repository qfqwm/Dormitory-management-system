<template>
  <div class="all">
    <div class="top">
      <span>宿舍基本信息</span>
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
          </div>
          <div>
            <a-button type="primary" shape="round">检索宿舍</a-button>
          </div>
        </div>
        <div class="top_2_3">
          <div class="top_2_1">
            <div>
              <home-outlined :style="{ fontSize: '100px', color: '#08c' }" />
            </div>
            <div>
              <p class="top_2_1_1">房间号</p>
              <p class="top_2_1_2">101</p>
            </div>
          </div>
          <div class="top_2_1">
            <div>
              <deployment-unit-outlined :style="{ fontSize: '100px', color: '#08c' }" />
            </div>
            <div>
              <p class="top_2_1_1">所在楼层</p>
              <p class="top_2_1_2">1层</p>
            </div>
          </div>
          <div class="top_2_1">
            <div>
              <database-outlined :style="{ fontSize: '100px', color: '#08c' }" />
            </div>
            <div>
              <p class="top_2_1_1">宿舍楼</p>
              <p class="top_2_1_2">和园一号</p>
            </div>
          </div>
          <div class="top_2_1">
            <div>
              <user-delete-outlined :style="{ fontSize: '100px', color: '#08c' }" />
            </div>
            <div>
              <p class="top_2_1_1">宿舍最大人数</p>
              <p class="top_2_1_2">6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>宿舍成员</h2>
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
    <div class="last">
      <h2>宿舍评价</h2>
      <div class="last_1">
        <div class="last_1_1">
          <a-form class="ss" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish">
            <a-form-item label="宿舍评价" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
              <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item label="评分" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
              <!-- <a-input-password v-model:value="formState.password" /> -->
              <a-input-number v-model:value="formState.password" :min="1" :max="100" />
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
              <a-button type="primary" html-type="submit">发表评分</a-button>
            </a-form-item>
          </a-form>
        </div>
        <div class="last_1_2">
          <div class="last_1_2_1">
            <div class="last_1_2_1_1">
              <div>评价分数：99</div>
              <div>优秀</div>
            </div>
            <div class="last_1_2_1_2">
              <div>评价：宿舍不错</div>
              <div class="last_1_2_1_2_1">
                <div>评价人：秦</div>
                <div>2022年12月29日17:24</div>
              </div>
            </div>
          </div>
          <div class="last_1_2_1">
            <div class="last_1_2_1_1">
              <div>评价分数：99</div>
              <div>优秀</div>
            </div>
            <div class="last_1_2_1_2">
              <div>评价：宿舍不错</div>
              <div class="last_1_2_1_2_1">
                <div>评价人：秦</div>
                <div>2022年12月29日17:24</div>
              </div>
            </div>
          </div>
          <div class="last_1_2_1"> asd </div>
          <div class="last_1_2_1"> asd </div>
          <div class="last_1_2_1"> asd </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { formateDate } from '@/layout/time';
  import { ref, onMounted, reactive } from 'vue';
  import { HomeOutlined, DeploymentUnitOutlined, DatabaseOutlined, UserDeleteOutlined } from '@ant-design/icons-vue';
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
      title: '电话号',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '入住时间',
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

  interface FormState {
    username: string;
    password: string;
  }

  const formState = reactive<FormState>({
    username: '',
    password: '',
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
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
    max-height: 100%; // 你可以设置固定或者最大最小高度
    overflow: hidden; // 隐藏超出部分
    overflow-y: scroll;

    .top {
      width: 100%;
      min-height: 40%;
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
        flex-direction: column;

        .top_2_2 {
          display: flex;
          height: 30%;
          padding: 0 10px;
          justify-content: space-between;
          align-items: center;
          background-color: white;

          .top_2_2_1 {
            width: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
          }
        }

        .top_2_3 {
          height: 63%;
          display: flex;
          margin: 20px 0 0 0;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          .top_2_1 {
            display: flex;
            width: 23%;
            height: 90%;
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
    }
    .footer {
      width: 100%;
      min-height: 50%;
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

    .last {
      width: 100%;
      min-height: 100%;
      margin: 30px 0 0 0;
      //   background-color: gray;

      h2 {
        font-weight: 550;
        margin: 10px 0 0 10px;
        font-size: 30px;
      }

      .last_1 {
        // display: flex;
        width: 100%;
        height: 91%;
        margin: 10px 0 0 0;
        // background-color: red;

        .last_1_1 {
          height: 20%;
          background-color: white;
          margin: 10px 0;

          .ss {
            padding: 10px;
            // text-align: center;

            // .ant-input-affix-wrapper {
            //   width: 50%;
            // }
            /deep/.ant-col-offset-8 {
              margin-left: 94.333333%;
            }
            /deep/.ant-col-16 {
              max-width: 92.666667%;
            }
          }

          /deep/.ant-col-8 {
            display: block;
            flex: 0 0 6.333333%;
            max-width: 33.33333333%;
          }
        }

        .last_1_2 {
          display: flex;
          height: 80%;
          //   margin: 20px;
          //   padding: 20px;
          flex-wrap: wrap;
          justify-content: flex-start;
          flex-direction: row;
          align-content: space-around;

          .last_1_2_1 {
            width: 30%;
            height: 45%;
            margin: 20px 30px;
            background-color: white;

            .last_1_2_1_1 {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              font-size: 30px;
              color: white;
              padding: 10px;
              background-color: blue;
            }

            .last_1_2_1_2 {
              display: flex;
              flex-direction: column;
              font-size: 20px;
              color: gray;
              margin: 10px 20px 0 20px;

              .last_1_2_1_2_1 {
                margin: 140px 0px 0 0px;
                display: flex;
                justify-content: space-between;
              }
            }
          }
        }
      }
    }
  }
</style>
