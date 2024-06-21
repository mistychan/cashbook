<template>
  <el-menu default-active="/index/" :collapse="isCollapse" @select="selectMenu">
    <el-menu-item index="/index/">
      <el-icon><HomeFilled /></el-icon>
      <template #title>主页</template>
    </el-menu-item>
    <el-menu-item index="/index/bill">
      <el-icon><Histogram /></el-icon>
      <template #title>账单</template>
    </el-menu-item>
    <el-menu-item index="/index/user">
      <el-icon><Orange /></el-icon>
      <template #title>报表</template>
    </el-menu-item>
  </el-menu>

  <el-menu default-active="#" id="menu-bottom" :collapse="isCollapse" @select="selectMenu">
    <el-menu-item index="#1" @click="themeChange()">
      <el-icon v-show="isDark">
        <MoonNight />
      </el-icon>
      <el-icon v-show="!isDark">
        <Sunny />
      </el-icon>
      <template #title>{{ isDark ? '夜间模式' : '白天模式' }}</template>
    </el-menu-item>

    <el-menu-item index="#2" @click="menuChange()">
      <el-icon v-show="isCollapse" size="large">
        <Expand />
      </el-icon>
      <el-icon v-show="!isCollapse" size="large">
        <Fold />
      </el-icon>
      <template #title>{{ isCollapse ? '展开' : '收起' }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import {
  HomeFilled,
  Histogram,
  Orange,
  Expand,
  Fold,
  MoonNight,
  Sunny
} from '@element-plus/icons-vue';
import { isDark } from '@/utils/common';
import { useToggle } from '@vueuse/shared';
import { useRouter } from 'vue-router';
const isCollapse = ref(false);

// 设置主题色
const themeChange = useToggle(isDark);
const router = useRouter();

const menuChange = () => {
  isCollapse.value = !isCollapse.value;
};

const selectMenu = (key: string, keyPath: string[]) => {
  console.log('selectMenu', key, keyPath)
  router.push({ path: key })
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0 solid;
}
.el-sub-menu__title span {
  margin-right: 2rem;
}
</style>
