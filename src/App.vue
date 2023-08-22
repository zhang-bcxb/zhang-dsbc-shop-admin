<script setup>
// console.log(import.meta.env.VITE_BASE_URL)
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
/* 修改背景颜色 */
body {
  @apply bg-gray-100;
}

/* 修改进度条样式 */
#nprogress .bar {
  background-color: #f4f4f4 !important;
  height: 3px !important;
}

/* 全局滚动条样式配置 */
/* 滚动条整体部分 */
::-webkit-scrollbar {
  width: 4px;
  height: 6px;
}

/* 滚动条边角部分 */
::-webkit-scrollbar-corner {
  display: block;
}

/* 滚动条滑轮部分 */
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
}

/* 滚动条轨道部分 */
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  border-right-color: transparent;
  border-left-color: transparent;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
