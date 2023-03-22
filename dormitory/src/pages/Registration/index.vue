<template>
  <div class="all">
    <div class="top">
      <h2>个人记录</h2>
      <div class="top_2">
        <div class="left">
          <a-button type="text" shape="circle" class="cri"
            ><p>归宿打卡</p>
            {{ nowTime }}
          </a-button>
        </div>
        <div class="right">
          <div class="right_1">
            <p class="right_1_1">早归概率</p>
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
      <h2>折线图表</h2>
      <div id="myChart" class="footer_2"> </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { formateDate } from '@/layout/time';
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';
  const nowTime = ref('');
  onMounted(() => {
    setInterval(() => {
      nowTime.value = formateDate(new Date());
    });

    const myChart = echarts.init(document.getElementById('myChart'), 'light'); // 初始化echarts, theme为light
    myChart.setOption(echartsOption); // echarts设置选项
  });

  const value1 = ref('Yiminghe');
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const echartsOption = reactive({
    // echarts选项，所有绘图数据和样式都在这里设置
    legend: {
      //图表上方的图例
      data: ['秦', '余', '陈', '古'],
    },
    xAxis: {
      type: 'category',
      data: ['最近两天', '最近四天', '最近六天', '最近八天'], // x轴数据
      name: '天数', // x轴名称
      nameTextStyle: {
        // x轴名称样式
        fontWeight: 600,
        fontSize: 18,
      },
    },
    yAxis: {
      type: 'value',
      name: '早归概率', // y轴名称
      nameTextStyle: {
        // y轴名称样式
        fontWeight: 600,
        fontSize: 18,
      },
      axisLabel: {
        //y轴设置为%
        show: true,
        interval: 'auto',
        formatter: '{value} %',
      },
    },
    tooltip: {
      //鼠标放到图上的数据展示样式
      trigger: 'axis',
    },
    series: [
      //每条折线的数据系列
      {
        name: '秦',
        data: [100, 100, 100, 100],
        type: 'line',
      },
      {
        name: '余',
        data: [50, 50, 70, 80],
        type: 'line',
      },
      {
        name: '陈',
        data: [0, 70, 80, 80],
        type: 'line',
      },
      {
        name: '古',
        data: [0, 60, 50, 30],
        type: 'line',
      },
    ],
  });
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
            flex-direction: column;
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
