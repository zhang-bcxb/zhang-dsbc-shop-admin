import {ElNotification, ElMessageBox} from 'element-plus'
import nprogress from 'nprogress'

/**
 * 功能：消息提示弹窗
 * @param message 消息内容
 * @param type 消息类型
 * @param dangerouslyUseHTMLString 是否处理 HTML
 */
export function msgUtil(message, type = "success", dangerouslyUseHTMLString = false) {
  ElNotification({
    message,
    type,
    dangerouslyUseHTMLString,
    duration: 3000
  })
}

// 显示全屏loading
export function showFullLoading() {
  nprogress.start()
}

// 隐藏全屏loading
export function hideFullLoading() {
  nprogress.done()
}

/**
 * 功能：确认消息提示框
 * @param content 内容
 * @param type 类型
 * @param title 标题
 * @returns {Promise<MessageBoxData>}
 */
export function showModal(content = "提示内容", type = "warning", title = "") {
  return ElMessageBox.confirm(
      content,
      title,
      {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type,
      }
  )
}

/**
 * 功能：弹出输入框
 * @param tip 标题
 * @param value 数据
 * @returns {Promise<MessageBoxData>}
 */
export function showPrompt(tip, value = "") {
  return ElMessageBox.prompt(tip, '', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    inputValue: value
  })
}