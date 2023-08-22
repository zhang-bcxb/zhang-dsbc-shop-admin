import http from '~/utils/http.js'

// 商品分类列表
export function getCategoryList() {
  return http.get("/admin/category")
}

// 新增
export function createCategory(data) {
  return http.post("/admin/category", data)
}

// 修改
export function updateCategory(id, data) {
  return http.post("/admin/category/" + id, data)
}

// 更新状态
export function updateCategoryStatus(id, status) {
  return http.post(`/admin/category/${id}/update_status`, {
    status
  })
}

// 删除
export function deleteCategory(id) {
  return http.post(`/admin/category/${id}/delete`)
}

// 【推荐商品】获取分类商品
export function getCategoryGoods(id) {
  return http.get(`/admin/app_category_item/list?category_id=${id}`)
}

// 【推荐商品】删除关联的商品
export function deleteCategoryGoods(id) {
  return http.post(`/admin/app_category_item/${id}/delete`)
}

// 【弹窗组件】关联商品
export function connectCategoryGoods(data) {
  return http.post(`/admin/app_category_item`, data)
}