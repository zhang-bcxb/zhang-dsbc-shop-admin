// 路由配置数组
const routes = [{
  path: "/",
  component: Admin,
  // 子路由
  children: [{
    path: "/",
    component: Index,
    meta: {
      title: "后台首页"
    }
  }, {
    path: "/goods/list",
    component: GoodList,
    meta: {
      title: "商品管理"
    }
  }]
}, {
  path: "/login",
  component: Login,
  meta: {
    title: "登录页面"
  }
}, {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
  meta: {
    title: "404 页面"
  }
}]