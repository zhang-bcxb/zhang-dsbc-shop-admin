import {ref} from 'vue'
import {useRoute, onBeforeRouteUpdate} from 'vue-router';
import {useCookies} from '@vueuse/integrations/useCookies'
import {router} from '~/router';

export function useTabList() {
  const route = useRoute()
  const cookie = useCookies()
  // 获取当前路由
  const activeTab = ref(route.path)

  // tab 列表
  const tabList = ref([
    {
      title: '后台首页',
      path: "/"
    },
  ])

  // 添加标签导航
  function addTab(tab) {
    // 判断当前 tab 是否存在
    let noTab = tabList.value.findIndex(t => t.path == tab.path) == -1
    // 不存在，则添加
    if (noTab) {
      tabList.value.push(tab)
    }
    // 在 cookie 中存储数据
    cookie.set("tabList", tabList.value)
  }

  // 初始化标签导航列表
  function initTabList() {
    let tbs = cookie.get("tabList")
    // 如果 cookie 中存在，则进行更新数据
    if (tbs) {
      tabList.value = tbs
    }
  }

  initTabList()

  /**
   * 路由更新之前【监听路由】
   * to：到哪里去
   * from：从哪里来
   */
  onBeforeRouteUpdate((to, from) => {
    // 更新当前 tab
    activeTab.value = to.path
    // 添加 tab
    addTab({
      title: to.meta.title,
      path: to.path
    })
  })

  // 切换 tab
  const changeTab = (t) => {
    // 更新当前 tab
    activeTab.value = t
    // 跳转路由
    router.push(t)
  }

  // 移除 tab
  const removeTab = (t) => {
    // 获取数据
    let tabs = tabList.value
    let a = activeTab.value

    // 当前 tab 和 删除的 tab 相等，需要切换 tab
    if (a == t) {
      tabs.forEach((tab, index) => {
        if (tab.path == t) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            a = nextTab.path
          }
        }
      })
    }

    // 更新当前 tab
    activeTab.value = a
    // 更新当前 tabList
    tabList.value = tabList.value.filter(tab => tab.path != t)
    // 更新当前 cookie
    cookie.set("tabList", tabList.value)
  }

  // 下拉菜单处理关闭 Tab
  const handleClose = (c) => {
    if (c == "clearAll") { // 关闭所有 tab
      // 切换回首页
      activeTab.value = "/"
      // 过滤只剩下首页
      tabList.value = [{
        title: '后台首页',
        path: "/"
      }]
    } else if (c == "clearOther") { // 关闭其它 tab
      // 过滤只剩下首页和当前激活
      tabList.value = tabList.value.filter(tab => tab.path == "/" || tab.path == activeTab.value)
    }
    cookie.set("tabList", tabList.value)
  }

  return {
    activeTab,
    tabList,
    changeTab,
    removeTab,
    handleClose
  }
}