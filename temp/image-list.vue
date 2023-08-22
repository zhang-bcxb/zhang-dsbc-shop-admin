<template>
  <el-container class="bg-white rounded" :style="{ height: (h + 'px') }">
    <!-- 头部区域 -->
    <el-header class="image-header">Header</el-header>
    <el-container>
      <!-- 左侧 - 分页区域 -->
      <el-aside width="220px" class="image-aside">
        <div class="top">
          <div v-for="i in 100" :key="i">{{ i }}</div>
        </div>
        <div class="bottom">
          分页区域
        </div>
      </el-aside>
      <!-- 右侧 - 分页区域 -->
      <el-main class="image-main">
        <div class="top">
          <div v-for="i in 100" :key="i">{{ i }}</div>
        </div>
        <div class="bottom">
          分页区域
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
// 动态计算内容高度
// 浏览器可视高度
const windowHeight = window.innerHeight || document.body.clientHeight
// 内容高度 = 可视高度 - 头部高度 - tab 高度 - el-main-padding
const h = windowHeight - 64 - 44 - 40
</script>
<style>
.image-header {
  border-bottom: 1px solid #eeeeee;
  /* 垂直居中 */
  @apply flex items-center;
}

.image-aside {
  border-right: 1px solid #eeeeee;
  position: relative;
}

.image-main {
  position: relative;
}

.image-aside .top,
.image-main .top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  /* 滚动条 */
  overflow-y: auto;
}

.image-aside .bottom,
.image-main .bottom {
  position: absolute;
  bottom: 0;
  height: 50px;
  left: 0;
  right: 0;
  @apply flex items-center justify-center;
}
</style>