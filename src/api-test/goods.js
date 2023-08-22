import http from '~/utils/http.js'
import {queryParams} from "~/utils/url.js"

// 分页
export function getGoodsList(page, query = {}) {
  let r = queryParams(query)
  return http.get("/goods/getGoodsList.json")
}

// 批量上架/下架
export function updateGoodsStatus(ids, status) {
  return http.get("/common.json");
}

// 添加
export function createGoods(data) {
  return http.get("/common.json");
}

// 更新
export function updateGoods(id, data) {
  return http.get("/common.json");
}

// 删除
export function deleteGoods(ids) {
  return http.get("/common.json");
}

// 恢复
export function restoreGoods(ids) {
  return http.get("/common.json");
}

// 彻底删除
export function destroyGoods(ids) {
  return http.get("/common.json");
}

// 获取轮播图
export function readGoods(id) {
  return http.get("/goods/readGoods.json")
}

// 设置轮播图
export function setGoodsBanner(id, data) {
  return http.get("/common.json");
}

// 更新商品 SKU
export function updateGoodsSkus(id, data) {
  return http.get("/common.json");
}

// 创建规格选项
export function createGoodsSkusCard(data) {
  return http.get("/common.json");
}

// 修改规格选项
export function updateGoodsSkusCard(id, data) {
  return http.get("/common.json");
}

// 删除规格选项
export function deleteGoodsSkusCard(id) {
  return http.get("/common.json");
}

// 排序规格选项
export function sortGoodsSkusCard(data) {
  return http.get("/common.json");
}

// 添加规格选项的值
export function createGoodsSkusCardValue(data) {
  return http.get("/common.json");
}

// 修改规格选项的值
export function updateGoodsSkusCardValue(id, data) {
  return http.get("/common.json");
}

// 删除规格选项的值
export function deleteGoodsSkusCardValue(id) {
  return http.get("/common.json");
}

// 选中并设置商品的规格选项
export function chooseAndSetGoodsSkusCard(id, data) {
  return http.get("/common.json");
}