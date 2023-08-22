import http from "~/utils/http.js";

// 发起登录请求
export function login(username, password) {
  return http.get("/manager/login.json");
}

// 获取信息
export function getInfo() {
  return http.get("/manager/getinfo.json");
}

// 退出登录
export function logout() {
  return http.get("/manager/logout.json");
}

// 修改密码
export function updatePwd(data) {
  return http.get("/common.json");
}

/**
 * 获取管理员分页列表数据
 * encodeURIComponent 可以将某些字符转成 16 进制，防止参数丢失
 * @param page 页码
 * @param query {limit:10,keyword:"cs"} => ?limit=10&keyword=cs
 * @returns {*}
 */
export function getManagerList(page, query = {}) {
  return http.get("/manager/getManagerList.json");
}

// 修改管理员状态
export function updateManagerStatus(id, status) {
  return http.get("/common.json");
}

// 创建
export function createManager(data) {
  return http.get("/common.json");
}

// 更新
export function updateManager(id, data) {
  return http.get("/common.json");
}

// 删除
export function deleteManager(id) {
  return http.get("/common.json");
}
