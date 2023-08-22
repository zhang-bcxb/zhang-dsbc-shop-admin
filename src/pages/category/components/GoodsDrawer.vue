<template>
  <FormDrawer ref="formDrawerRef" title="推荐商品" @submit="handleConnect" confirmText="关联">
    <el-table :data="tableData" border stripe style="width:100%;">
      <el-table-column prop="goods_id" label="ID" width="60"/>
      <el-table-column label="商品封面" width="180">
        <template #default="{ row }">
          <el-image :src="row.cover" fit="fill" :lazy="true"
                    style="width: 64px;height: 64px;"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="180"/>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-popconfirm title="是否要删除该记录？" confirmButtonText="确认" cancelButtonText="取消" @confirm="handleDelete(row)">
            <template #reference>
              <el-button text type="primary" size="small" :loading="row.loading">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

  </FormDrawer>

  <!-- 选择商品弹窗组件 -->
  <ChooseGoods ref="ChooseGoodsRef"/>
</template>
<script setup>
import {ref} from "vue"
import FormDrawer from '~/components/FormDrawer.vue';
import ChooseGoods from "~/components/ChooseGoods.vue"

import {
  getCategoryGoods,
  deleteCategoryGoods,
  connectCategoryGoods
} from "@api/category.js"
import {msgUtil} from "~/utils/message.js"

const formDrawerRef = ref(null)
const category_id = ref(0)
const tableData = ref([])

// 打开组件
const open = (item) => {
  category_id.value = item.id
  item.goodsDrawerLoading = true
  getData().then(res => formDrawerRef.value.open()).finally(() => {
    item.goodsDrawerLoading = false
  })
}

// 获取数据
function getData() {
  return getCategoryGoods(category_id.value).then(res => {
    // console.log(res)
    tableData.value = res.map(o => {
      o.loading = false
      return o
    })
  })
}

// 删除关联的商品
const handleDelete = (row) => {
  row.loading = true
  deleteCategoryGoods(row.id).then(res => {
    msgUtil("删除成功")
    getData()
  })
  // 数据已经被移除，所以 finally 可以不用写
}

// 选择关联商品
const ChooseGoodsRef = ref(null)
const handleConnect = () => {
  // 打开窗口的时候传递回调函数
  ChooseGoodsRef.value.open((goods_ids) => {
    formDrawerRef.value.showLoading()
    connectCategoryGoods({
      category_id: category_id.value,
      goods_ids
    }).then(res => {
      getData()
      msgUtil("关联成功")
    }).finally(() => {
      formDrawerRef.value.hideLoading()
    })
  })
}

// 向父组件暴露方法
defineExpose({
  open
})
</script>
