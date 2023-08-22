import http from '~/utils/http.js'

// 分页
export function getCouponList(page) {
  return http.get(`/admin/coupon/${page}`)
}

// 创建
export function createCoupon(data) {
  return http.post("/admin/coupon", data)
}

// 更新
export function updateCoupon(id, data) {
  return http.post("/admin/coupon/" + id, data)
}

// 删除
export function deleteCoupon(id) {
  return http.post(`/admin/coupon/${id}/delete`)
}

// 更新状态
export function updateCouponStatus(id) {
  return http.post(`/admin/coupon/${id}/update_status`, {
    status: 0
  })
}