<template>
  <div class="header-container">
    <div class="header-left">
      <h3>Here is your CashBook</h3>
    </div>
    <div class="header-right">
      <div class="options">
        <el-button>切换账本</el-button>
      </div>
      <div class="options">
        <el-dropdown id="setting-dropdown">
          <span>
            <el-icon><Tools /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { Tools } from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>
.header-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-right{
    display: flex;
    align-items: center;
    .options{
      padding: 0.5rem;
      #setting-dropdown{
        font-size: 1rem;
        padding: 0.5rem;
      }
    }
  }
}
</style>
