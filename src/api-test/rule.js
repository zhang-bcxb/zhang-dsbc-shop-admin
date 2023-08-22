import http from '~/utils/http.js'

// 权限管理分页
export function getRuleList(page) {
  return http.get("/rule/getRuleList.json")
}

// 新增
export function createRule(data) {
  return http.get("/common.json");
}

// 修改
export function updateRule(id, data) {
  return http.get("/common.json");
}

// 修改状态
export function updateRuleStatus(id,status){
  return http.get("/common.json");
}

// 删除
export function deleteRule(id){
  return http.get("/common.json");
}