import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 推广人
export function getAgentList(page, query = {}) {
  return http.get("/distribution/getAgentList.json")
}

// 推广列表
export function getAgentOrderList(page, query = {}) {
  return http.get("/distribution/getAgentOrderList.json")
}

// 分销员统计
export function getAgentStatistics() {
  return http.get("/distribution/getAgentStatistics.json")
}

// 获取配置
export function getConfig() {
  return http.get("/distribution/getConfig.json")
}

// 设置配置
export function setConfig(data) {
  return http.get("/common.json");
}