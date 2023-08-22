import http from '~/utils/http.js'

// 权限管理分页
export function getRuleList(page) {
  return http.get(`/admin/rule/${page}`)
}

// 新增
export function createRule(data) {
  return http.post("/admin/rule", data)
}

// 修改
export function updateRule(id, data) {
  return http.post("/admin/rule/" + id, data)
}

// 修改状态
export function updateRuleStatus(id,status){
  return http.post(`/admin/rule/${id}/update_status`,{
    status
  })
}

// 删除
export function deleteRule(id){
  return http.post(`/admin/rule/${id}/delete`)
}