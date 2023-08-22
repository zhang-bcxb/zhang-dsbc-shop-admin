import http from '~/utils/http.js'

// 分页
export function getCouponList(page) {
  return http.get('/coupon/getCouponList.json')
}

// 创建
export function createCoupon(data) {
  return http.get("/common.json");
}

// 更新
export function updateCoupon(id, data) {
  return http.get("/common.json");
}

// 删除
export function deleteCoupon(id) {
  return http.get("/common.json");
}

// 更新状态
export function updateCouponStatus(id) {
  return http.get("/common.json");
}