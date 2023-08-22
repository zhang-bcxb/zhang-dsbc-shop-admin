import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 分页
export function getGoodsCommentList(page, query = {}) {
  let r = queryParams(query)
  return http.get("/goods_comment/getGoodsCommentList.json")
}

// 修改状态
export function updateGoodsCommentStatus(id, status) {
  return http.get("/common.json");
}

// 回复用户评价
export function reviewGoodsComment(id, data) {
  return http.get("/common.json");
}