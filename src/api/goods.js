import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 分页
export function getGoodsList(page, query = {}) {
  let r = queryParams(query)
  return http.get(`/admin/goods/${page}${r}`)
}

// 批量上架/下架
export function updateGoodsStatus(ids, status) {
  return http.post(`/admin/goods/changestatus`, {
    ids,
    status
  })
}

// 添加
export function createGoods(data) {
  return http.post(`/admin/goods`, data)
}

// 更新
export function updateGoods(id, data) {
  return http.post(`/admin/goods/${id}`, data)
}

// 删除
export function deleteGoods(ids) {
  return http.post(`/admin/goods/delete_all`, {
    ids
  })
}

// 恢复
export function restoreGoods(ids) {
  return http.post(`/admin/goods/restore`, {
    ids
  })
}

// 彻底删除
export function destroyGoods(ids) {
  return http.post(`/admin/goods/destroy`, {
    ids
  })
}

// 获取轮播图
export function readGoods(id) {
  return http.get(`/admin/goods/read/${id}`)
}

// 设置轮播图
export function setGoodsBanner(id, data) {
  return http.post(`/admin/goods/banners/${id}`, data)
}

// 更新商品 SKU
export function updateGoodsSkus(id, data) {
  return http.post(`/admin/goods/updateskus/${id}`, data)
}

// 创建规格选项
export function createGoodsSkusCard(data) {
  return http.post(`/admin/goods_skus_card`, data)
}

// 修改规格选项
export function updateGoodsSkusCard(id, data) {
  return http.post(`/admin/goods_skus_card/${id}`, data)
}

// 删除规格选项
export function deleteGoodsSkusCard(id) {
  return http.post(`/admin/goods_skus_card/${id}/delete`)
}

// 排序规格选项
export function sortGoodsSkusCard(data) {
  return http.post(`/admin/goods_skus_card/sort`, data)
}

// 添加规格选项的值
export function createGoodsSkusCardValue(data) {
  return http.post(`/admin/goods_skus_card_value`, data)
}

// 修改规格选项的值
export function updateGoodsSkusCardValue(id, data) {
  return http.post(`/admin/goods_skus_card_value/${id}`, data)
}

// 删除规格选项的值
export function deleteGoodsSkusCardValue(id) {
  return http.post(`/admin/goods_skus_card_value/${id}/delete`)
}

// 选中并设置商品的规格选项
export function chooseAndSetGoodsSkusCard(id, data) {
  return http.post(`/admin/goods_skus_card/${id}/set`, data)
}