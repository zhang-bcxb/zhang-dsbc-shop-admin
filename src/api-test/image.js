import http from '~/utils/http.js'

// 图片列表分页
export function getImageList(id, page = 1) {
  return http.get("/image/getImageList.json")
}

// 重命名
export function updateImage(id, name) {
  return http.get("/common.json");
}

// 删除
export function deleteImage(ids) {
  return http.get("/common.json");
}

// 上传图片路径
export const uploadImageAction = import.meta.env.VITE_BASE_URL + "/admin/image/upload"