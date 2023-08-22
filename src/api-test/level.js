import http from '~/utils/http.js'

// 分页
export function getUserLevelList(page) {
  return http.get("/level/getUserLevelList.json")
}

// 创建
export function createUserLevel(data) {
  return http.get("/common.json");
}

// 更新
export function updateUserLevel(id, data) {
  return http.get("/common.json");
}

// 删除
export function deleteUserLevel(id) {
  return http.get("/common.json");
}

// 更新状态
export function updateUserLevelStatus(id, status) {
  return http.get("/common.json");
}