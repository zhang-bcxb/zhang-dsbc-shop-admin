<template>
  <el-container class="bg-white rounded" :style="{ height: (h + 'px') }">
    <!-- 头部区域 -->
    <el-header class="image-header">
      <el-button type="primary" size="small" @click="handleOpenCreate">新增图片分类</el-button>
      <el-button type="warning" size="small" @click="handleOpenUpload">上传图片</el-button>
    </el-header>
    <el-container>
      <!-- 左侧 - 分页区域 -->
      <ImageAside ref="ImageAsideRef" @change="handleAsideChange"/>
      <!-- 右侧 - 分页区域 -->
      <ImageMain ref="ImageMainRef"/>
    </el-container>
  </el-container>
</template>
<script setup>
import {ref} from "vue";
import ImageAside from "~/components/ImageAside.vue"
import ImageMain from "~/components/ImageMain.vue"
// 动态计算内容高度
// 浏览器可视高度
const windowHeight = window.innerHeight || document.body.clientHeight
// 内容高度 = 可视高度 - 头部高度 - tab 高度 - el-main-padding
const h = windowHeight - 64 - 44 - 40

const ImageAsideRef = ref(null)
const handleOpenCreate = () => ImageAsideRef.value.handleCreate()

const ImageMainRef = ref(null)
const handleAsideChange = (image_class_id) => ImageMainRef.value.loadData(image_class_id)

const handleOpenUpload = () => ImageMainRef.value.openUploadFile()
</script>
<style>
.image-header {
  border-bottom: 1px solid #eeeeee;
  /* 垂直居中 */
  @apply flex items-center;
}
</style>