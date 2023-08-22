<template>
  <div>
    后台首页
    <el-button @click="set">设置</el-button>
    <el-button @click="get">读取</el-button>
    <el-button @click="remove">删除</el-button>
  </div>
</template>

<script setup>
import {useCookies} from '@vueuse/integrations/useCookies'

const cookie = useCookies()

//console.log(cookie)
const set = () => {
  cookie.set("admin-token", "123456")
}

const get = () => {
  console.log(cookie.get("admin-token"))
}

const remove = () => {
  cookie.remove("admin-token")
}
</script>

<style scoped>

</style>