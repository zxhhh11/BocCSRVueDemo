<script lang="ts" setup>
import { reactive, ref, unref, toRefs, Ref } from 'vue';
import { ElForm } from 'element-plus';
// eslint-disable-next-line no-unused-vars
import { User, Lock } from '@element-plus/icons-vue';
import { handleLogin } from '@/apis/user';
import { useRouter } from 'vue-router';

const ruleForm: {
  username: string;
  pwd: string;
} = { username: '', pwd: '' };
const ruleForms = ref(ruleForm);

const ruleFormRef = ref(ElForm);
const router = useRouter();
const submitForm = (name: string) => {
  console.log(name);
  const form = unref(ruleFormRef); //  如果参数是一个 ref 则返回ref 内部值 相当于 ref.value 否则返回参数本身
  form.validate((valid: any) => {
    console.log(ruleForms, 'state.ruleForm', valid, 'valid');
    if (valid) {
      handleLogin({
        username: ruleForms.value.username,
        pwd: ruleForms.value.pwd
      }).then((res: any) => {
        if (res) {
          console.log({ res }, 'before push');
          if (res.data.status === 401) {
            // router
            //   .push({
            //     path: '/dashboard'
            //     // query: state.otherQuery
            //   })
            //   .catch((err) => {
            //     console.warn(err);
            //   });
            router.push('/');
          } else if (res.data.status === 200) {
            router.push('/test');
          }
        }
      });
    } else {
      return false;
    }
  });
};
// const resetForm = () => {
//   const form = unref(ruleFormRef);
//   form.resetFields();
// };
</script>

<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">测试系统</div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForms"
        status-icon
        class="demo-ruleForm"
      >
        <!--  :rules="rules" -->
        <el-form-item prop="username">
          <el-input
            :prefix-icon="User"
            v-model="ruleForms.username"
            placeholder="Username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            placeholder="Password"
            :prefix-icon="Lock"
            v-model="ruleForms.pwd"
            autocomplete="off"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item class="btn-form-group">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Submit</el-button
          >
          <!-- <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style>
.login {
  border: 1px solid transparent;
}
.login-box {
  width: 22em;
  height: 22em;
  margin: 160px auto;
  padding: 3em 2em 0;
  background: url(data:image/png;base64,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)
    no-repeat -30% 0 #fff;

  position: relative;
}
.login-box:before {
  content: '';
  position: absolute;
  width: 114px;
  height: 56px;
  flex: 1 1 50%;
  background: url(data:image/png;base64,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)
    no-repeat #fff;
  bottom: 0;
  right: 0;
}
.demo-ruleForm {
  height: 100%;
}
.login-box .login-title {
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 30px;
  margin-bottom: 30px;
}

.login-box .el-form-item {
  padding: 4px 6px;
  margin-bottom: 24px;
}
.btn-form-group {
  text-align: right;
}
.btn-form-group .el-button {
  width: 100%;
}
</style>
