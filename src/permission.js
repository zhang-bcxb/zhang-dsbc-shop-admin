import {router, addRoutes} from "~/router"
import {getToken} from "~/utils/auth.js"
import {msgUtil, showFullLoading, hideFullLoading} from "~/utils/message.js"
// 引入 vuex 状态管理
import store from './store'

// 路由导航守卫
/**
 * 全局前置守卫
 * to：即将去的路由
 * from：来源（从哪里来的路由）
 * next：放行
 */
let hasGetInfo = false
router.beforeEach(async (to, from, next) => {

  // 显示 Loading【主要路由发生变化就会触发】
  showFullLoading()

  // 获取 token
  const token = getToken()

  // 没有登录，强制跳转回登录页
  if (!token && to.path != "/login") {
    msgUtil("请先登录", "error")
    return next({path: "/login"})
  }

  // 防止重复登录
  if (token && to.path == "/login") {
    msgUtil("请勿重复登录", "error")
    return next({path: from.path ? from.path : "/"})
  }

  // 如果用户登录，自动获取当前用户信息并存储在 vuex 中
  let hasNewRoutes = false
  if (token && !hasGetInfo) {
    // 存储用户信息
    let res = await store.dispatch("getInfo")
    // console.log(res)
    // 动态添加路由
    hasNewRoutes = addRoutes(res.menus)
    // 更新状态
    hasGetInfo = true
  }

  // 设置页面标题
  let title = (to.meta.title ? to.meta.title : "") + "-帝莎编程商城后台"
  document.title = title

  // 放行【手动指定路由】
  hasNewRoutes ? next(to.fullPath) : next()
})

// 全局后置守卫
router.afterEach((to, from) => hideFullLoading())