import {
  createRouter, // 创建路由
  createWebHashHistory // 创建 Hash 模式
} from 'vue-router'

// 导入组件
import Admin from '~/layouts/admin.vue'
import Index from '~/pages/index.vue'
import Login from '~/pages/login.vue'
import NotFound from '~/pages/404.vue'
// 列表组件
import GoodList from '~/pages/goods/list.vue'
import CategoryList from '~/pages/category/list.vue'
import UserList from '~/pages/user/list.vue'
import OrderList from '~/pages/order/list.vue'
import CommentList from '~/pages/comment/list.vue'
import ImageList from '~/pages/image/list.vue'
import NoticeList from '~/pages/notice/list.vue'
import SettingBase from '~/pages/setting/base.vue'
import SettingBuy from '~/pages/setting/buy.vue'
import SettingShip from '~/pages/setting/ship.vue'
import CouponList from '~/pages/coupon/list.vue'
import ManagerList from '~/pages/manager/list.vue'
import AccessList from '~/pages/access/list.vue'
import RoleList from '~/pages/role/list.vue'
import SkusList from '~/pages/skus/list.vue'
import LevelList from '~/pages/level/list.vue'
import DistributionIndex from '~/pages/distribution/index.vue'
import DistributionSetting from '~/pages/distribution/setting.vue'

// 路由配置数组
// 默认路由，所有用户共享
const routes = [{
  path: "/",
  name: "admin",
  component: Admin,
  // 子路由
  // children: []
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

// 动态路由，用于匹配菜单动态添加路由
const asyncRoutes = [{
  path: "/",
  name: "/",
  component: Index,
  meta: {
    title: "后台首页"
  }
}, {
  path: "/goods/list",
  name: "/goods/list",
  component: GoodList,
  meta: {
    title: "商品管理"
  }
}, {
  path: "/category/list",
  name: "/category/list",
  component: CategoryList,
  meta: {
    title: "分类列表"
  }
}, {
  path: "/user/list",
  name: "/user/list",
  component: UserList,
  meta: {
    title: "用户列表"
  }
}, {
  path: "/order/list",
  name: "/order/list",
  component: OrderList,
  meta: {
    title: "订单列表"
  }
}, {
  path: "/comment/list",
  name: "/comment/list",
  component: CommentList,
  meta: {
    title: "评价列表"
  }
}, {
  path: "/image/list",
  name: "/image/list",
  component: ImageList,
  meta: {
    title: "图库列表"
  }
}, {
  path: "/notice/list",
  name: "/notice/list",
  component: NoticeList,
  meta: {
    title: "公告列表"
  }
}, {
  path: "/setting/base",
  name: "/setting/base",
  component: SettingBase,
  meta: {
    title: "基础配置"
  }
}, {
  path: "/coupon/list",
  name: "/coupon/list",
  component: CouponList,
  meta: {
    title: "优惠券列表"
  }
}, {
  path: "/manager/list",
  name: "/manager/list",
  component: ManagerList,
  meta: {
    title: "管理员列表"
  }
}, {
  path: "/access/list",
  name: "/access/list",
  component: AccessList,
  meta: {
    title: "菜单权限管理"
  }
}, {
  path: "/role/list",
  name: "/role/list",
  component: RoleList,
  meta: {
    title: "角色管理"
  }
}, {
  path: "/skus/list",
  name: "/skus/list",
  component: SkusList,
  meta: {
    title: "规格管理"
  }
}, {
  path: "/level/list",
  name: "/level/list",
  component: LevelList,
  meta: {
    title: "会员等级"
  }
}, {
  path: "/setting/buy",
  name: "/setting/buy",
  component: SettingBuy,
  meta: {
    title: "交易设置"
  }
}, {
  path: "/setting/ship",
  name: "/setting/ship",
  component: SettingShip,
  meta: {
    title: "物流设置"
  }
}, {
  path: "/distribution/index",
  name: "/distribution/index",
  component: DistributionIndex,
  meta: {
    title: "分销员管理"
  }
}, {
  path: "/distribution/setting",
  name: "/distribution/setting",
  component: DistributionSetting,
  meta: {
    title: "分销设置"
  }
}]

// 创建路由
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 动态添加路由的方法
// 原理：动态数组里面要写全部的路由，然后与后端的数据进行比对，比对成功的就进行添加
export function addRoutes(menus) {
  // 是否有新的路由
  let hasNewRoutes = false
  // 找到并添加菜单
  const findAndAddRoutesByMenus = (arr) => {
    arr.forEach(e => {
      // 通过路径去匹配，拿到动态数组里面的节点
      let item = asyncRoutes.find(o => o.path == e.frontpath)
      // 存在 并且 没有注册过
      if (item && !router.hasRoute(item.path)) {
        // console.log(item)
        // 添加子路由
        router.addRoute("admin", item)
        hasNewRoutes = true
      }
      // 如果存在孩子，需要进行递归
      if (e.child && e.child.length > 0) {
        findAndAddRoutesByMenus(e.child)
      }
    })
  }

  findAndAddRoutesByMenus(menus)

  // 查看所有路由
  // console.log(router.getRoutes())

  return hasNewRoutes
}

// 导出
// export default router