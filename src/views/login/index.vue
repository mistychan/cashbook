<template>
  <div class="login-container">
    <div class="icon-container">
      <img src="@/assets/vue.svg" width="60" />
      <h1>CashBook</h1>
    </div>
    <div class="login-form">
      <el-form ref="loginForm" :model="formData" :rules="rules" label-width="5rem">
        <el-form-item label="账号" prop="userName" class="login-input">
          <el-input v-model="formData.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="login-input">
          <el-input
            v-model="formData.password"
            type="password"
            autocomplete="off"
            @keyup.enter="submitForm(loginForm)"
          ></el-input>
        </el-form-item>
        <div class="login-button">
          <el-checkbox v-model="rememberUser">记住我</el-checkbox>
          <el-button type="success" @click="toRegister">注册</el-button>
          <el-button type="primary" @click="submitForm(loginForm)">登录</el-button>
        </div>
      </el-form>
    </div>
    <div class="theme-switch">
      <el-switch
        v-model="themeValue"
        @change="changeTheme()"
        :active-action-icon="Sunny"
        :inactive-action-icon="MoonNight"
      ></el-switch>
    </div>
    <!-- 注册弹窗 -->
    <el-dialog style="width: 25vw" v-model="registerDialog.visible" :title="registerDialog.title">
      <div class="dialog-main">
        <el-form ref="registerForm" :model="registerUser" :rules="registerRules" label-width="5rem">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="registerUser.name" placeholder="name"></el-input>
          </el-form-item>
          <el-form-item label="账号" prop="userName">
            <el-input v-model="registerUser.userName" placeholder="Account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="registerUser.password"
              type="password"
              autocomplete="off"
              show-password
              placeholder="Password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="againPassword">
            <el-input
              v-model="registerUser.againPassword"
              type="password"
              autocomplete="off"
              show-password
              placeholder="Password Again"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span>
          <el-button type="primary" @click="register(registerForm)">确定</el-button>
          <el-button @click="cancel(registerForm)">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { Sunny, MoonNight } from '@element-plus/icons-vue';
import { ElMessage, type FormInstance, type FormRules } from 'element-plus';
import { ref, reactive, onMounted } from 'vue';
import type { User } from '@/types/model/user';
import { useToggle } from '@vueuse/shared';
import { isDark } from '@/utils/common';
import { useRouter } from 'vue-router';
const loginForm = ref<FormInstance>();
const registerForm = ref<FormInstance>();
const formData = ref<User>({
  userName: '',
  password: ''
});
const registerUser = ref<User>({
  name: '',
  userName: '',
  password: '',
  againPassword: ''
});
const router = useRouter();
const themeValue = ref(false);
const changeTheme = useToggle(isDark);
const rememberUser = ref(true);
const registerDialog = ref({
  visible: false,
  title: '注册用户'
});
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  }
  if (value !== registerUser.value.password) {
    callback(new Error('两次密码不一致'));
  }
  callback();
};
const rules = reactive<FormRules<typeof formData>>({
  userName: [
    { required: true, message: '请输入用户名/账号', trigger: 'blur' },
    { min: 6, max: 18, message: '字符限制：6-18', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '字符限制：6-18', trigger: 'blur' }
  ]
});
const registerRules = reactive<FormRules<typeof registerUser>>({
  name: [{ required: true, message: '请填写用户名' }],
  userName: [
    { required: true, message: '请输入登录名', trigger: 'blur' },
    { min: 6, max: 18, message: '字符限制：6-18', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 18, message: '字符限制：6-18', trigger: 'blur' }
  ],
  againPassword: [{ validator: validatePass, trigger: 'blur' }]
});
const submitForm = async (form: FormInstance | undefined) => {
  if (!form) return;
  try {
    await form.validate();
  } catch (error: any) {
    ElMessage.error('请检查表单内容');
    return;
  }
  console.log(formData.value);
  ElMessage.success('登录成功');
  router.push({ name: 'Home' });
};

const register = async (form: FormInstance | undefined) => {
  if (!form) return;
  try {
    await form.validate();
  } catch (error: any) {
    ElMessage.error('请检查表单内容');
    return;
  }
  console.log(registerUser.value);
  ElMessage.success('注册成功');
  registerDialog.value.visible = false;
};
const toRegister = () => {
  registerDialog.value.visible = true;
};
const cancel = (form: FormInstance | undefined) => {
  registerDialog.value.visible = false;
  form?.resetFields();
};
onMounted(() => {
  themeValue.value = !isDark.value;
});
</script>

<style lang="scss" scoped>
.login-container {
  padding: 2rem;
  border-radius: 10px;
  margin: 1rem;
  height: calc(100vh - 9rem);
  border: solid 1px var(--el-menu-border-color);
  text-align: center;
  position: relative;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 3rem 0;
    > h1 {
      margin-left: 2rem;
    }
  }

  .login-form {
    display: flex;
    justify-content: center;
    align-items: center;

    .login-input {
      width: 24rem;
    }

    .login-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2rem 0;

      > .el-button {
        margin-left: 1rem;
      }

      > .el-checkbox {
        margin-left: 1rem;
      }
    }
  }

  .theme-switch {
    position: absolute;
    right: 5rem;
    bottom: 5rem;
  }
}
</style>
