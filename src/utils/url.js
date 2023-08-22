/**
 * 将 query 对象转成 url 参数
 * @param query {limit:10,keyword:"cs"} => ?limit=10&keyword=cs
 * @returns {string|string}
 */
export function queryParams(query) {
  let q = []
  for (const key in query) {
    if (query[key]) {
      q.push(`${key}=${encodeURIComponent(query[key])}`)
    }
  }
  let r = q.join("&")
  r = r ? ("?" + r) : ""
  return r
}