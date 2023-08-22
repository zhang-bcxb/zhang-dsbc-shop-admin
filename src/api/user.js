import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 分页
export function getUserList(page, query = {}) {
  let r = queryParams(query)
  return http.get(`/admin/user/${page}${r}`)
}

// 更新状态
export function updateUserStatus(id, status) {
  return http.post(`/admin/user/${id}/update_status`, {
    status
  })
}

// 创建
export function createUser(data) {
  return http.post(`/admin/user`, data)
}

// 更新
export function updateUser(id, data) {
  return http.post(`/admin/user/${id}`, data)
}

// 删除
export function deleteUser(id) {
  return http.post(`/admin/user/${id}/delete`)
}