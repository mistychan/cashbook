<template>
  <div class="top">
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button value="top">报表</el-radio-button>
      <el-radio-button value="right">日历</el-radio-button>
    </el-radio-group>
  </div>
  <div class="bill-container">
    <div class="left-charts">
      <!-- echarts图 -->
    </div>
    <div class="right-list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          v-for="item in columns"
          :key="item.id"
          :prop="item.prop"
          :label="item.label"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
const tabPosition = ref('top');
const tableData = reactive([]);
const columns = reactive([{}])
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
</style>
