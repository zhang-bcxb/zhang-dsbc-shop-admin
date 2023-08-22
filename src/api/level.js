import http from '~/utils/http.js'

// 分页
export function getUserLevelList(page) {
  return http.get(`/admin/user_level/${page}`)
}

// 创建
export function createUserLevel(data) {
  return http.post("/admin/user_level", data)
}

// 更新
export function updateUserLevel(id, data) {
  return http.post("/admin/user_level/" + id, data)
}

// 删除
export function deleteUserLevel(id) {
  return http.post(`/admin/user_level/${id}/delete`)
}

// 更新状态
export function updateUserLevelStatus(id, status) {
  return http.post(`/admin/user_level/${id}/update_status`, {
    status
  })
}