import http from '~/utils/http.js'

// 商品分类列表
export function getCategoryList() {
  return http.get("/category/getCategoryList.json")
}

// 新增
export function createCategory(data) {
  return http.get("/common.json");
}

// 修改
export function updateCategory(id, data) {
  return http.get("/common.json");
}

// 更新状态
export function updateCategoryStatus(id, status) {
  return http.get("/common.json");
}

// 删除
export function deleteCategory(id) {
  return http.get("/common.json");
}

// 【推荐商品】获取分类商品
export function getCategoryGoods(id) {
  return http.get("/category/getCategoryGoods.json")
}

// 【推荐商品】删除关联的商品
export function deleteCategoryGoods(id) {
  return http.get("/common.json");
}

// 【弹窗组件】关联商品
export function connectCategoryGoods(data) {
  return http.get("/common.json");
}