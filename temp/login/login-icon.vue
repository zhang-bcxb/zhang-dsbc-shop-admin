<template>
  <el-row class="min-h-screen bg-indigo-500">
    <el-col :lg="16" :md="12" class="flex items-center justify-center">
      <div>
        <div class="font-bold text-5xl text-light-50 mb-4">欢迎光临</div>
        <div class="text-gray-200 text-sm">【vue3 + vite实战商城后台开发】</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="bg-light-50 flex items-center justify-center flex-col">
      <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
      <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form :model="form" class="w-[250px]">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <user/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码">
            <template #prefix>
              <el-icon>
                <lock/>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button round color="#626aef" class="w-[250px]" type="primary" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import {reactive} from 'vue'
// 局部引入图标
// import {Lock, User} from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive({
  username: "",
  password: ""
})

const onSubmit = () => {
  console.log('submit!')
}
</script>