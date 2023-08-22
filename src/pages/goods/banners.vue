<template>
  <el-drawer title="设置轮播图" v-model="dialogVisible" size="50%" destroy-on-close>
    <el-form :model="form" label-width="80px">
      <el-form-item label="轮播图">
        <ChooseImage :limit="9" v-model="form.banners"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit" :loading="loading">提交</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>
<script setup>
import {ref, reactive} from "vue"
import ChooseImage from "~/components/ChooseImage.vue";
import {msgUtil} from "~/utils/message.js"

import {
  readGoods,
  setGoodsBanner
} from "@api/goods"

// 弹窗是否显示
const dialogVisible = ref(false)

// 表单数据
const form = reactive({
  banners: []
})

// 商品标识
const goodsId = ref(0)
// 显示弹窗
const open = (row) => {
  goodsId.value = row.id
  row.bannersLoading = true
  readGoods(goodsId.value).then(res => {
    // console.log(res)
    form.banners = res.goodsBanner.map(o => o.url)
    dialogVisible.value = true
  }).finally(() => {
    row.bannersLoading = false
  })
}

// 提交数据
const emit = defineEmits(["reloadData"])
const loading = ref(false)
const submit = () => {
  loading.value = true
  setGoodsBanner(goodsId.value, form).then(res => {
    msgUtil("设置轮播图成功")
    dialogVisible.value = false
    emit("reloadData")
  }).finally(() => {
    loading.value = false
  })
}

// 暴露方法
defineExpose({
  open
})
</script>
