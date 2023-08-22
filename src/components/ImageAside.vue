<template>
  <el-aside width="220px" class="image-aside" v-loading="loading">
    <div class="top">

      <AsideList :active="activeId == item.id"
                 v-for="(item,index) in list"
                 @edit="handleEdit(item)"
                 @delete="handleDelete(item.id)"
                 @click="handleChangeActiveId(item.id)"
                 :key="index">
        {{ item.name }}
      </AsideList>

    </div>
    <div class="bottom">
      <el-pagination background layout="prev, next"
                     :total="total"
                     :current-page="currentPage"
                     :page-size="limit"
                     @current-change="getData"/>
    </div>
  </el-aside>

  <FormDrawer :title="drawerTitle" ref="formDrawerRef" @submit="handleSubmit">
    <el-form :model="form" ref="formRef" :rules="rules" label-width="80px" :inline="false">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="order">
        <el-input-number v-model="form.order" :min="0" :max="1000"/>
      </el-form-item>
    </el-form>
  </FormDrawer>
</template>
<script setup>
import {ref, reactive, computed} from "vue";
import {
  getImageClassList,
  createImageClass,
  updateImageClass,
  deleteImageClass
} from "@api/image_class.js"
import AsideList from './AsideList.vue';
import FormDrawer from "./FormDrawer.vue"
import {
  msgUtil
} from "~/utils/message.js"

// 加载动画
const loading = ref(false)
// 列表数据
const list = ref([])
// 当前选中的分类
const activeId = ref(0)

// 分页参数
const currentPage = ref(1)
const total = ref(0)
const limit = ref(10)

// 获取数据
function getData(p = null) {
  if (typeof p == "number") {
    currentPage.value = p
  }

  loading.value = true
  getImageClassList(currentPage.value).then(res => {
    // console.log(res)
    total.value = res.totalCount
    list.value = res.list
    // 拿到第一项数据，让其默认选中
    let item = list.value[0]
    if (item) {
      activeId.value = item.id
      // 切换分类
      handleChangeActiveId(item.id)
    }
  }).finally(() => {
    loading.value = false
  })
}

getData()

// 编辑标识
const editId = ref(0)
// 表单标题
const drawerTitle = computed(() => editId.value ? "修改" : "新增")
// 组件节点
const formDrawerRef = ref(null)
// 表单数据
const form = reactive({
  name: "",
  order: 50
})
// 表单规则
const rules = {
  name: [{
    required: true,
    message: '图库分类名称不能为空',
    trigger: 'blur'
  }]
}
// 表单节点
const formRef = ref(null)
// 提交表单数据
const handleSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) return
    // console.log("提交成功");
    formDrawerRef.value.showLoading()

    const fun = editId.value ? updateImageClass(editId.value, form) : createImageClass(form)

    fun.then(res => {
      msgUtil(drawerTitle.value + "成功")
      getData(editId.value ? currentPage.value : 1)
      formDrawerRef.value.close()
    }).finally(() => {
      formDrawerRef.value.hideLoading()
    })
    /*createImageClass(form).then(res => {
      msgUtil("新增成功")
      getData(1)
      formDrawerRef.value.close()
    }).finally(() => {
      formDrawerRef.value.hideLoading()
    })*/
  })
}

// 新增分类
const handleCreate = () => {
  editId.value = 0
  form.name = ""
  form.order = 50
  formDrawerRef.value.open()
}
// 修改分类
const handleEdit = (row) => {
  editId.value = row.id
  form.name = row.name
  form.order = row.order
  formDrawerRef.value.open()
}
// 删除分类
const handleDelete = (id) => {
  loading.value = true
  deleteImageClass(id).then(res => {
    msgUtil("删除成功")
    getData()
  }).finally(() => {
    loading.value = false
  })
}

// 定义通知事件
const emit = defineEmits(["change"])

// 切换分类
function handleChangeActiveId(id) {
  activeId.value = id
  // 触发事件
  emit("change", id)
}

// 分发方法
defineExpose({
  handleCreate
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

</style>
