import {createApp} from 'vue'
// import './style.css'
import App from './App.vue'
// 引入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 Windi CSS
import 'virtual:windi.css'
// 引入路由
import {router} from './router'
// 引入路由导航守卫
import "./permission"
// 引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入 vuex 状态管理
import store from './store'
// 引入进度条样式
import "nprogress/nprogress.css"
// 导入自定义指令
import permission from "~/directives/permission.js";

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(permission)

// 注册全部图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
