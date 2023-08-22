import http from '~/utils/http.js'

// 图片列表分页
export function getImageList(id, page = 1) {
  return http.get(`/admin/image_class/${id}/image/${page}`)
}

// 重命名
export function updateImage(id, name) {
  return http.post(`/admin/image/${id}`, {name})
}

// 删除
export function deleteImage(ids) {
  return http.post(`/admin/image/delete_all`, {ids})
}

// 上传图片路径
export const uploadImageAction = import.meta.env.VITE_BASE_URL + "/admin/image/upload"