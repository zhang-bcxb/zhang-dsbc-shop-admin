import http from '~/utils/http.js'

// 公告分页
export function getNoticeList(page) {
  return http.get(`/admin/notice/${page}`)
}

// 新增公告
export function createNotice(data) {
  return http.post("/admin/notice", data)
}

// 修改公告
export function updateNotice(id, data) {
  return http.post("/admin/notice/" + id, data)
}

// 删除公告
export function deleteNotice(id) {
  return http.post(`/admin/notice/${id}/delete`)
}