<template>
  <div class="top">
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button value="top">报表</el-radio-button>
      <el-radio-button value="right">日历</el-radio-button>
    </el-radio-group>
  </div>
  <div class="bill-container">
    <div ref="myChart" class="expenses"></div>
    <el-table :data="tableData">
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import * as echarts from 'echarts';
const tabPosition = ref('top');
const tableData = reactive([
  { date: '2021-01-23', money: 123, type: '日常' },
  { date: '2021-01-23', money: 123, type: '日常' },
  { date: '2021-01-23', money: 123, type: '日常' }
]);
const columns = reactive([
  { prop: 'date', label: '日期' },
  { prop: 'money', label: '费用' },
  { prop: 'type', label: '类别' }
]);
const myChart = ref(null);
onMounted(() => {
  initEcharts();
});

function initEcharts() {
  const element = myChart.value;
  // let chart = echarts.init(document.getElementById('expenses'));
  let chart = echarts.init(element);
  let option = {
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        name: '支出',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 26,
            fontWeight: 'bold'
          }
        },
        data: [
          { value: 276, name: '购物' },
          { value: 987, name: '餐饮' },
          { value: 90, name: '交通' },
          { value: 200, name: '通讯' },
          { value: 190, name: '日常' },
          { value: 200, name: '美妆' }
        ]
      }
    ]
  };
  chart.setOption(option);
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.expenses {
  margin: 0 auto;
  width: 500px;
  height: 500px;
}
</style>
