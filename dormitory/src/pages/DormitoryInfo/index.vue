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
                <a-select ref="select" v-model:value="value3" style="width: 220px">
                  <a-select-option v-for="(item, index) in roomId" :key="index" :value="item">{{ item }}</a-select-option>
                </a-select>
              </a-space>
            </div>
          </div>
          <div>
            <a-button type="primary" shape="round" @click="getdata">检索宿舍</a-button>
          </div>
        </div>
        <div class="top_2_3">
          <div class="top_2_1">
            <div>
              <home-outlined :style="{ fontSize: '100px', color: '#08c' }" />
            </div>
            <div>
              <p class="top_2_1_1">房间号</p>
              <p class="top_2_1_2">{{ lowdata.roomId }}</p>
            </div>
          </div>
          <div class="top_2_1">
            <div>
              <deployment-unit-outlined :style="{ fontSize: '100px', color: '#08c' }" />
            </div>
            <div>
              <p class="top_2_1_1">所在楼层</p>
              <p class="top_2_1_2">{{ lowdata.floorId }}层</p>
            </div>
          </div>
          <div class="top_2_1">
            <div>
              <database-outlined :style="{ fontSize: '100px', color: '#08c' }" />
            </div>
            <div>
              <p class="top_2_1_1">宿舍楼</p>
              <p class="top_2_1_2">{{ lowdata.buildingId }}</p>
            </div>
          </div>
          <div class="top_2_1">
            <div>
              <user-delete-outlined :style="{ fontSize: '100px', color: '#08c' }" />
            </div>
            <div>
              <p class="top_2_1_1">宿舍人数</p>
              <p class="top_2_1_2">{{ lowdata.lengths }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>宿舍成员</h2>
      <div class="footer_2">
        <a-table :columns="columns" :data-source="dataSource" :style="{ width: '100%' }" :pagination="false">
          <!-- <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>姓名</span>
            </template>
          </template> -->

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <!-- <template v-if="column.key === 'room'">
              <a>
                {{ record.room }}
              </a>
            </template> -->
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
  import { ref, onMounted, reactive, Ref } from 'vue';
  import { floormanagement, dormitoryInfos } from '../../api/test/index';
  import { HomeOutlined, DeploymentUnitOutlined, DatabaseOutlined, UserDeleteOutlined } from '@ant-design/icons-vue';
  const nowTime = ref('');
  onMounted(() => {
    setInterval(() => {
      nowTime.value = formateDate(new Date());
    });
  });

  const value1 = ref('');
  const value2 = ref('');
  const value3 = ref('');
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
      console.log(res.data.message, 'asd');
      res.data.message.forEach((item: { number: any }) => {
        // test.value = item.number;
        test.value.push(JSON.parse(JSON.stringify(item.number)).split(','));
      });
      datas.value = res.data.message;
    });
  };
  //选择楼层
  const handleChange2 = (value: string) => {
    value3.value = '';
    test.value.forEach((item: any, index: any) => {
      // console.log(item, value, index, 'asd');
      if (value == index + 1) {
        roomId.value = item;
      }
    });
  };
  //检索宿舍情况
  // const info = reactive({ dormitory: 1, roomId: 101 });
  const info = reactive({
    dormitory: '',
    roomId: '',
  });

  interface DataItem {
    name: string;
    username: string;
    phone: string;
    checkTime: string;
  }
  const dataSource: Ref<DataItem[]> = ref([]);
  const lowdata = reactive({ roomId: '', floorId: '', buildingId: '', lengths: 0 });
  const getdata = () => {
    info.dormitory = value1.value;
    info.roomId = value3.value;
    // console.log(info);
    dormitoryInfos(info).then((res: any) => {
      console.log(res.data.message);
      dataSource.value = res.data.message;
      lowdata.lengths = dataSource.value.length;
    });
    lowdata.roomId = value3.value;
    lowdata.floorId = value2.value;
    lowdata.buildingId = '和园' + value1.value + '号';
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '学号',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: '电话号',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '入住时间',
      key: 'checkTime',
      dataIndex: 'checkTime',
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
</script>
<style lang="less" scoped>
  .all::-webkit-scrollbar {
    display: none;
  }

  .all {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
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
      // margin: 0 0 20px 0;
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
