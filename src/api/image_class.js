import http from '~/utils/http.js'

/* 图库分类列表分页 */
export function getImageClassList(page) {
  return http.get("/admin/image_class/" + page)
}

/* 图库分类添加 */
export function createImageClass(data) {
  return http.post("/admin/image_class", data)
}

/* 图库分类修改 */
export function updateImageClass(id, data) {
  return http.post("/admin/image_class/" + id, data)
}

/* 图库分类删除 */
export function deleteImageClass(id) {
  return http.post(`/admin/image_class/${id}/delete`)
}