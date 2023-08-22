<template>
  <el-dialog
      title="规格选择"
      v-model="dialogVisible"
      width="80%"
      top="5vh">

    <el-container style="height:65vh;">
      <el-aside width="220px" class="image-aside">
        <div class="top">

          <div class="sku-list" :class="{'active':(activeId == item.id)}"
               v-for="(item,index) in tableData" :key="index"
               @click="handleChangeActiveId(item.id)">
            {{ item.name }}
          </div>

        </div>
        <div class="bottom">
          <el-pagination
              background
              layout="prev, next"
              :total="total"
              :current-page="currentPage"
              :page-size="limit"
              @current-change="getData"/>
        </div>
      </el-aside>
      <el-main>
        <el-checkbox-group v-model="form.list">
          <el-checkbox v-for="item in list" :key="item" :label="item" border>
            {{ item }}
          </el-checkbox>
        </el-checkbox-group>
      </el-main>
    </el-container>

    <template #footer>
            <span>
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submit">确定</el-button>
            </span>
    </template>
  </el-dialog>
</template>
<script setup>
import {ref, reactive} from "vue"
import {
  getSkusList
} from "@api/skus"
import {
  useInitTable
} from "~/useApi/useCommon.js"

// 是否显示弹窗
const dialogVisible = ref(false)
// 当前选中的列表项
const activeId = ref(0)
const {
  loading,
  currentPage,
  limit,
  total,
  tableData,
  getData
} = useInitTable({
  getList: getSkusList,
  onGetListSuccess: (res) => {
    tableData.value = res.list
    total.value = res.totalCount

    // 默认选中列表的第一个
    if (tableData.value.length > 0) {
      handleChangeActiveId(tableData.value[0].id)
    }
  }
})

const callbackFunction = ref(null)
const open = (callback = null) => {
  // 接收父组件传递的回调函数
  callbackFunction.value = callback
  getData(1)
  dialogVisible.value = true
}

// 循环的选项
const list = ref([])
// 选中的数据
const form = reactive({
  name: "",
  list: []
})

// 处理改变的列表项
function handleChangeActiveId(id) {
  activeId.value = id
  list.value = []
  // 找到当前激活的选项
  let item = tableData.value.find(o => o.id == id)
  if (item) {
    // "default": "150,160,170" 分割选项
    list.value = item.default.split(",")
    form.name = item.name
  }
}

const submit = () => {
  if (typeof callbackFunction.value === "function") {
    // 执行父组件的回调函数
    callbackFunction.value(form)
  }
  dialogVisible.value = false
}

// 向父组件暴露方法
defineExpose({
  open
})
</script>
<style>
.image-aside {
  border-right: 1px solid #eeeeee;
  position: relative;
}

.image-aside .top {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 50px;
  overflow-y: auto;
}

.image-aside .bottom {
  position: absolute;
  bottom: 0;
  height: 50px;
  left: 0;
  right: 0;
  @apply flex items-center justify-center;
}

.sku-list {
  border-bottom: 1px solid #f4f4f4;
  @apply p-3 text-sm text-gray-600 flex items-center cursor-pointer;
}

.sku-list:hover, active {
  @apply bg-blue-50;
}
</style>
