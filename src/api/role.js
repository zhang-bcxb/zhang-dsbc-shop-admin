import http from '~/utils/http.js'

// 分页
export function getRoleList(page) {
  return http.get(`/admin/role/${page}`)
}

// 创建
export function createRole(data) {
  return http.post("/admin/role", data)
}

// 修改
export function updateRole(id, data) {
  return http.post("/admin/role/" + id, data)
}

// 删除
export function deleteRole(id) {
  return http.post(`/admin/role/${id}/delete`)
}

// 更新状态
export function updateRoleStatus(id, status) {
  return http.post(`/admin/role/${id}/update_status`, {
    status
  })
}

// 设置角色权限
export function setRoleRules(id, rule_ids) {
  return http.post(`/admin/role/set_rules`, {
    id, rule_ids
  })
}
