import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 分页 & 查询
export function getOrderList(page, query = {}) {
  let r = queryParams(query)
  return http.get("/order/getOrderList.json")
}

// 删除
export function deleteOrder(ids) {
  return http.get("/common.json");
}

// 导出订单
export function exportOrder(query = {}) {
  // let r = queryParams(query)
  // return http.post(`/admin/order/excelexport${r}`, {}, {
  //   responseType: "blob"
  // })
  return http.get("/common.json");
}

// 物流信息
export function getShipInfo(id) {
  return http.get("/order/getShipInfo.json")
}

// 同意/拒绝 退款
export function refundOrder(id, data) {
  return http.get("/common.json");
}