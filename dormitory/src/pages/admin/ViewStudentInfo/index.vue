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
          </div>
          <div>
            <a-button type="primary" shape="round">搜索</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>详细信息</h2>
      <div class="footer_2">
        <div class="footer_2_1">
          <div class="footer_2_1_1">
            <h2>用户信息</h2><hr />
            <p>姓名：<span>秦</span></p>
            <p>学号：<span>199001016</span></p>
            <p>手机号：<span>17623237427</span></p>
            <p>注册日期：<span>2022-12-30</span></p>
          </div>
          <div class="footer_2_1_2">
            <div class="top_2_1">
              <div>
                <home-outlined :style="{ fontSize: '80px', color: '#08c' }" />
              </div>
              <div>
                <p class="top_2_1_1">房间号</p>
                <p class="top_2_1_2">101</p>
              </div>
            </div>
            <div class="top_2_1">
              <div>
                <deployment-unit-outlined :style="{ fontSize: '80px', color: '#08c' }" />
              </div>
              <div>
                <p class="top_2_1_1">所在楼层</p>
                <p class="top_2_1_2">1层</p>
              </div>
            </div>
            <div class="top_2_1">
              <div>
                <database-outlined :style="{ fontSize: '80px', color: '#08c' }" />
              </div>
              <div>
                <p class="top_2_1_1">宿舍楼</p>
                <p class="top_2_1_2">和园一号</p>
              </div>
            </div>
            <div class="top_2_1">
              <div>
                <user-delete-outlined :style="{ fontSize: '80px', color: '#08c' }" />
              </div>
              <div>
                <p class="top_2_1_1">入住日期</p>
                <p class="top_2_1_2">2022-12-30</p>
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
  import { formateDate } from '@/layout/time';
  import { ref, onMounted } from 'vue';
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

  //   const columns = [
  //     {
  //       name: '姓名',
  //       dataIndex: 'name',
  //       key: 'name',
  //     },
  //     {
  //       title: '学号',
  //       dataIndex: 'age',
  //       key: 'age',
  //     },
  //     {
  //       title: '电话号',
  //       dataIndex: 'address',
  //       key: 'address',
  //     },
  //     {
  //       title: '入住时间',
  //       key: 'age',
  //       dataIndex: 'age',
  //     },
  //   ];

  //   const data = [
  //     {
  //       key: '1',
  //       name: 'John Brown',
  //       age: 32,
  //       address: 'New York No. 1 Lake Park',
  //     },
  //     {
  //       key: '2',
  //       name: 'Jim Green',
  //       age: 42,
  //       address: 'London No. 1 Lake Park',
  //     },
  //     {
  //       key: '3',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sidney No. 1 Lake Park',
  //     },
  //     {
  //       key: '4',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sidney No. 1 Lake Park',
  //     },
  //     {
  //       key: '5',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sidney No. 1 Lake Park',
  //     },
  //     {
  //       key: '6',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sidney No. 1 Lake Park',
  //     },
  //   ];

  //   interface FormState {
  //     username: string;
  //     password: string;
  //   }

  //   const formState = reactive<FormState>({
  //     username: '',
  //     password: '',
  //   });
  //   const onFinish = (values: any) => {
  //     console.log('Success:', values);
  //   };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
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
      //   background-color: gray;

      span {
        font-weight: 550;
        margin: 10px 20px 0 10px;
        font-size: 30px;
      }

      .top_2 {
        display: flex;
        width: 100%;
        height: 95%;
        margin: 10px 0 0 0;
        flex-direction: column;

        .top_2_2 {
          display: flex;
          height: 72%;
          padding: 0 10px;
          justify-content: space-between;
          align-items: center;
          background-color: white;

          .top_2_2_1 {
            width: 70%;
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
      height: 90%;
      //   background-color: black;

      h2 {
        font-weight: 550;
        margin: 10px 0 0 10px;
        font-size: 30px;
      }

      .footer_2 {
        display: flex;
        width: 100%;
        height: 91%;
        margin: 10px 0 0 0;
        flex-direction: column;
        // background-color: red;

        .footer_2_1 {
          display: flex;
          width: 100%;
          height: 48%;
          //   background-color: black;
          justify-content: space-between;

          .footer_2_1_1 {
            width: 49%;
            //   margin: 10px 0 0 0;
            background-color: white;

            h2 {
              font-size: 20px;
              color: blue;
              margin: 20px;
            }
            hr {
              width: 95%;
            }
            p {
              color: gray;
              margin: 30px;
              font-weight: 550;

              span {
                color: rgb(24, 24, 24);
              }
            }
          }
          .footer_2_1_2 {
            display: flex;
            width: 49%;
            background-color: white;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: space-around;
            justify-content: space-around;

            .top_2_1 {
              display: flex;
              width: 45%;
              height: 45%;
              //   background-color: white;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
              border-style: ridge;
              box-shadow: 2px 2px 2px 2px pink;

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

        .footer_2_2 {
          width: 100%;
          height: 49%;
          margin: 20px 0 0 0;
          background-color: white;

          p {
            margin: 50px 20px;
          }
        }
      }
    }
  }
</style>
