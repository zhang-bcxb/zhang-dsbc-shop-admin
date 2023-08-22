import store from "~/store"

/**
 * 权限判断
 * @param value 数组 例如：['getStatistics3,GET']
 * @param el 节点
 * @returns {boolean} true 表示有权限，false表示没有权限
 */
function hasPermission(value, el = false) {
  // 判断数组类型
  if (!Array.isArray(value)) {
    throw new Error(`需要配置权限，例如 v-permission="['getStatistics3,GET']"`)
  }
  // 判断是否有权限
  const hasAuth = value.findIndex(v => store.state.ruleNames.includes(v)) != -1
  // 如果没有权限，就移除该节点
  if (el && !hasAuth) {
    el.parentNode && el.parentNode.removeChild(el)
  }
  return hasAuth
}

// 导出
export default {
  install(app) {
    // console.log(app)
    // 自定义指令【v-permission】
    app.directive("permission", {
      mounted(el, binding) {
        // console.log(el) // 节点
        // console.log(binding) // 绑定
        hasPermission(binding.value, el)
      }
    })
  }
}