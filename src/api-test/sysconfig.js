import http from '~/utils/http.js'

// 获取
export function getSysconfig() {
  return http.get("/sysconfig/getSysconfig.json")
}

// 设置
export function setSysconfig(data) {
  return http.get("/common.json");
}

// 上传路径
// export const uploadAction = "/api/admin/sysconfig/upload"
export const uploadAction = import.meta.env.VITE_BASE_URL + "/admin/sysconfig/upload"