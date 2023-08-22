import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const config = loadEnv(mode, './')
  // console.log(config)
  return {
    plugins: [vue(), WindiCSS()],
    // 配置项目根路径别名
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        "@api": config.VITE_API_SRC
      }
    },
    server: {
      open: false, // 项目启动时是否打开页面
      port: '9080', // 项目启动时的端口号
      // 解决跨域问题
      proxy: {
        '/api': {
          target: 'http://ceshi13.dishait.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    }
  }
})
