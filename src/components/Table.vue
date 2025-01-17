<template>
<el-table :data="data" style="width: 100%">
  <!-- 单选列 -->
    <el-table-column v-if="showRadioButton" width="40" align="center" fixed="left">
      <template v-slot="scoped">
        <el-radio v-model="currentIndex" :label="scoped.$index"></el-radio>
      </template>
    </el-table-column>
    <!--  -->
</el-table>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

</script>

<style lang="scss" scoped>
</style>