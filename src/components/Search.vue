<template>
  <el-form :model="model" label-width="80px" class="mb-3" size="small">
    <el-row :gutter="20">
      <!-- 默认插槽（显示的部分） -->
      <slot/>

      <!-- 折叠的插槽 -->
      <template v-if="showSearch">
        <slot name="show"/>
      </template>

      <!-- 显示的按钮 -->
      <el-col :span="8" :offset="showSearch ? 0 : 8">
        <div class="flex items-center justify-end">
          <el-button type="primary" @click="$emit('search')">搜索</el-button>
          <el-button @click="$emit('reset')">重置</el-button>
          <el-button type="primary" text @click="showSearch = !showSearch" v-if="hasShowSearch">
            {{ showSearch ? '收起' : "展开" }}
            <el-icon>
              <ArrowUp v-if="showSearch"/>
              <ArrowDown v-else/>
            </el-icon>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>
<script setup>
import {ref, useSlots} from 'vue';

// 接收父组件数据
defineProps({
  model: Object
})

// 分发事件
defineEmits(["search", "reset"])

// 是否展开（默认不展开）
const showSearch = ref(false)

// 是否拥有展开按钮
// 获取插槽
const slots = useSlots()
// show 是插槽的名称，如果有就进行显示，用两个感叹号，是强行转成布尔值
const hasShowSearch = ref(!!slots.show)
</script>