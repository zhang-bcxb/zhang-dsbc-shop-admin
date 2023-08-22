import {createStore} from 'vuex'
// import {getInfo, login} from '~/api/manager.js'
// import {getInfo, login} from '~/api-test/manager.js'
import {getInfo, login} from '@api/manager.js'


import {setToken, removeToken} from '~/utils/auth.js'

const store = createStore({
  state() {
    return {
      // 用户信息
      user: {},
      // 侧边宽度
      asideWidth: "250px",
      // 菜单
      menus: [],
      // 权限
      ruleNames: []
    }
  },
  mutations: {
    // 记录用户信息
    SET_USERINFO(state, user) {
      state.user = user
    },
    // 展开/缩起侧边
    handleAsideWidth(state) {
      state.asideWidth = state.asideWidth == "250px" ? "64px" : "250px"
    },
    // 修改菜单
    SET_MENUS(state, menus) {
      state.menus = menus
    },
    // 修改权限
    SET_RULENAMES(state, ruleNames) {
      state.ruleNames = ruleNames
    }
  },
  actions: {
    // 登录【返回一个 Promise 对象】
    login({commit}, {username, password}) {
      return new Promise((resolve, reject) => {
        login(username, password).then(res => {
          setToken(res.token)
          console.log(res)
          resolve(res)
        }).catch(err => reject(err))
      })
    },
    // 获取当前登录用户信息【返回一个 Promise 对象】
    getInfo({commit}) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          // console.log(res)
          // 提交数据
          commit("SET_USERINFO", res)
          commit("SET_MENUS", res.menus)
          commit("SET_RULENAMES", res.ruleNames)
          // 请求成功
          resolve(res)
        }).catch(err => {
          // 请求失败
          reject(err)
        })
      })
    },
    // 退出登录
    logout({commit}) {
      // 移除cookie里的token
      removeToken()
      // 清除当前用户状态 vuex
      commit("SET_USERINFO", {})
    }
  }
})

export default store
