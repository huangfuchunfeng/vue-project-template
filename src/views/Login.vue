<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户名"
        prop="name"
      >
        <el-input
          placeholder="admin"
          type="text"
          v-model="ruleForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="pass"
      >
        <el-input
          placeholder="admin"
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>
<script>
import { setToken } from '@/utils/token.js'
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        pass: [{ required: true, message: '请输入密码', trigger: 'blur' }]

      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.name === 'admin' && this.ruleForm.pass === 'admin') {
            setToken('login')
            this.$router.push({
              name: 'Authenticated'
            })
            return
          }
          this.$message.error('账号或密码错误')
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss">
.demo-ruleForm {
  max-width: 500px;
  margin: 0 auto;
}
</style>
