import http from '~/utils/http.js'

// 分页
export function getSkusList(page) {
  return http.get(`/admin/skus/${page}`)
}

// 创建
export function createSkus(data) {
  return http.post("/admin/skus", data)
}

// 更新
export function updateSkus(id, data) {
  return http.post("/admin/skus/" + id, data)
}

// 删除
export function deleteSkus(ids) {
  ids = !Array.isArray(ids) ? [ids] : ids
  return http.post(`/admin/skus/delete_all`, {ids})
}

// 修改状态
export function updateSkusStatus(id, status) {
  return http.post(`/admin/skus/${id}/update_status`, {
    status
  })
}
