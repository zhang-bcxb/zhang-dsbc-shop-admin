import http from '~/utils/http.js'

// 分页
export function getRoleList(page) {
  return http.get("/role/getRoleList.json")
}

// 创建
export function createRole(data) {
  return http.get("/common.json");
}

// 修改
export function updateRole(id, data) {
  return http.get("/common.json");
}

// 删除
export function deleteRole(id) {
  return http.get("/common.json");
}

// 更新状态
export function updateRoleStatus(id, status) {
  return http.get("/common.json");
}

// 设置角色权限
export function setRoleRules(id, rule_ids) {
  return http.get("/common.json");
}
