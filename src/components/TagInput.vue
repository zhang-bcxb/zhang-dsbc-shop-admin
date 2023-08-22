<template>
  <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      class="mx-1"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
  >
    {{ tag }}
  </el-tag>
  <el-input
      v-if="inputVisible"
      ref="InputRef"
      v-model="inputValue"
      class="ml-1 w-20"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
  />
  <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
    + 添加值
  </el-button>
</template>

<script setup>
import {nextTick, ref} from 'vue'

// 接收父组件数据
const props = defineProps({
  modelValue: String
})
// 父组件修改子组件数据
const emit = defineEmits(["update:modelValue"])

const inputValue = ref('')
const dynamicTags = ref(props.modelValue ? props.modelValue.split(',') : [])
const inputVisible = ref(false)
const InputRef = ref()

// 关闭
const handleClose = (tag) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
  emit("update:modelValue", dynamicTags.value.join(","))
}

// 显示输入框
const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value.input.focus()
  })
}

// 输入框提交
const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
    emit("update:modelValue", dynamicTags.value.join(","))
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>