import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 推广人
export function getAgentList(page, query = {}) {
  let r = queryParams(query)
  return http.get(`/admin/agent/${page}${r}`)
}

// 推广列表
export function getAgentOrderList(page, query = {}) {
  let r = queryParams(query)
  return http.get(`/admin/user_bill/${page}${r}`)
}

// 分销员统计
export function getAgentStatistics() {
  return http.get("/admin/agent/statistics")
}

// 获取配置
export function getConfig() {
  return http.get(`/admin/distribution_setting/get`)
}

// 设置配置
export function setConfig(data) {
  return http.post(`/admin/distribution_setting/set`, data)
}