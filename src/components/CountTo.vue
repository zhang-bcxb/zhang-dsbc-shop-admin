<template>
  {{ d.num.toFixed(0) }}
</template>
<script setup>
import {reactive, watch} from "vue"
import gsap from "gsap"

// 接收父组件数据
const props = defineProps({
  value: {
    type: Number,
    default: 0
  }
})

// 滚动的数字
const d = reactive({
  num: 0
})

// 定义动画
function AnimateToValue() {
  gsap.to(d, {
    // 动画的时长
    duration: 0.5,
    // 最终的数值
    num: props.value
  })
}

// 执行动画
AnimateToValue()

// 监听数据【防止 setup 执行后才修改值】
watch(() => props.value, () => AnimateToValue())
</script>
