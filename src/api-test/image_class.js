import http from '~/utils/http.js'

/* 图库分类列表分页 */
export function getImageClassList(page) {
  return http.get("/image_class/getImageClassList1.json")
}

/* 图库分类添加 */
export function createImageClass(data) {
  return http.get("/common.json");
}

/* 图库分类修改 */
export function updateImageClass(id, data) {
  return http.get("/common.json");
}

/* 图库分类删除 */
export function deleteImageClass(id) {
  return http.get("/common.json");
}