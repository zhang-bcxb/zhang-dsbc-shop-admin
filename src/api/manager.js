import http from '~/utils/http.js'

// 发起登录请求
export function login(username, password) {
  return http.post("/admin/login", {
    username,
    password
  })
}

// 获取信息
export function getInfo() {
  return http.post("/admin/getinfo")
}

// 退出登录
export function logout() {
  return http.post("/admin/logout")
}

// 修改密码
export function updatePwd(data) {
  return http.post("/admin/updatepassword", data)
}

/**
 * 获取管理员分页列表数据
 * encodeURIComponent 可以将某些字符转成 16 进制，防止参数丢失
 * @param page 页码
 * @param query {limit:10,keyword:"cs"} => ?limit=10&keyword=cs
 * @returns {*}
 */
export function getManagerList(page, query = {}) {
  let q = []
  for (const key in query) {
    if (query[key]) {
      q.push(`${key}=${encodeURIComponent(query[key])}`)
    }
  }
  let r = q.join("&")
  r = r ? ("?" + r) : ""

  return http.get(`/admin/manager/${page}${r}`)
}

// 修改管理员状态
export function updateManagerStatus(id, status) {
  return http.post(`/admin/manager/${id}/update_status`, {
    status
  })
}

// 创建
export function createManager(data) {
  return http.post(`/admin/manager`, data)
}

// 更新
export function updateManager(id, data) {
  return http.post(`/admin/manager/${id}`, data)
}

// 删除
export function deleteManager(id) {
  return http.post(`/admin/manager/${id}/delete`)
}