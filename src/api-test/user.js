import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 分页
export function getUserList(page, query = {}) {
  let r = queryParams(query)
  return http.get("/user/getUserList.json")
}

// 更新状态
export function updateUserStatus(id, status) {
  return http.get("/common.json");
}

// 创建
export function createUser(data) {
  return http.get("/common.json");
}

// 更新
export function updateUser(id, data) {
  return http.get("/common.json");
}

// 删除
export function deleteUser(id) {
  return http.get("/common.json");
}