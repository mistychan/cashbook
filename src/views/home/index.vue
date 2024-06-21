<template>
  <div class="home-container">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container style="height: 93vh">
        <el-aside>
          <Menu></Menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
</script>

<style lang="scss" scoped>
</style>
<style>
.el-header {
  height: 4rem;
  border-bottom: 1px solid var(--el-menu-border-color);
}
.el-aside{
  width: auto;
  padding: 0.5rem;
  border-right: 1px solid var(--el-menu-border-color);
}
</style>