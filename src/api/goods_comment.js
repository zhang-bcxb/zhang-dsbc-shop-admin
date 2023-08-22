import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 分页
export function getGoodsCommentList(page, query = {}) {
  let r = queryParams(query)
  return http.get(`/admin/goods_comment/${page}${r}`)
}

// 修改状态
export function updateGoodsCommentStatus(id, status) {
  return http.post(`/admin/goods_comment/${id}/update_status`, {
    status
  })
}

// 回复用户评价
export function reviewGoodsComment(id, data) {
  return http.post(`/admin/goods_comment/review/${id}`, {
    data
  })
}