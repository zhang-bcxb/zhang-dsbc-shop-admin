import http from '~/utils/http.js'

// 公告分页
export function getNoticeList(page) {
  return http.get("/notice/getNoticeList.json")
}

// 新增公告
export function createNotice(data) {
  return http.get("/common.json");
}

// 修改公告
export function updateNotice(id, data) {
  return http.get("/common.json");
}

// 删除公告
export function deleteNotice(id) {
  return http.get("/common.json");
}