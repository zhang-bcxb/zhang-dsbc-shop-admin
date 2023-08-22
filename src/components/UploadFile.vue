<template>
  <el-upload
      drag
      :action="uploadImageAction"
      multiple
      :headers="{token}"
      name="img"
      :data="data"
      :on-success="uploadSuccess"
      :on-error="uploadError"
  >
    <el-icon class="el-icon--upload">
      <upload-filled/>
    </el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>
<script setup>
import {uploadImageAction} from "@api/image"
import {getToken} from "~/utils/auth.js"
import {msgUtil} from "~/utils/message.js"

// 获取 Token
const token = getToken()

// 接收父组件数据
defineProps({
  data: Object,
})

// 分发事件
const emit = defineEmits(["success"])

// 上传成功回调
const uploadSuccess = (response, uploadFile, uploadFiles) => {
  console.log(response);
  // 向父组件传递数据
  emit("success", {
    response, uploadFile, uploadFiles
  })
}

// 上传失败回调
const uploadError = (error, uploadFile, uploadFiles) => {
  let msg = JSON.parse(error.message).msg || "上传失败"
  msgUtil(msg, "error")
}
</script>
