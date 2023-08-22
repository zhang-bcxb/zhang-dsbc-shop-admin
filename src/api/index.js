import http from '~/utils/http.js'

// 后台首页统计1【统计面板】
export function getStatistics1() {
  return http.get("/admin/statistics1")
}

// 后台首页统计2【店铺和交易】
export function getStatistics2(){
  return http.get("/admin/statistics2")
}

// 后台首页统计3【Echarts 图表】
export function getStatistics3(type) {
  return http.get("/admin/statistics3?type=" + type)
}