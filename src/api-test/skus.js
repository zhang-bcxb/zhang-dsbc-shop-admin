import http from '~/utils/http.js'

// 分页
export function getSkusList(page) {
  return http.get("/skus/getSkusList.json")
}

// 创建
export function createSkus(data) {
  return http.get("/common.json");
}

// 更新
export function updateSkus(id, data) {
  return http.get("/common.json");
}

// 删除
export function deleteSkus(ids) {
  return http.get("/common.json");
}

// 修改状态
export function updateSkusStatus(id, status) {
  return http.get("/common.json");
}
