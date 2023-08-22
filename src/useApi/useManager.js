import {ref, reactive} from 'vue'
// import {logout, updatePwd} from "~/api-test/manager"
import {logout, updatePwd} from "@api/manager"
import {showModal, msgUtil} from "~/utils/message.js"
import {useRouter} from "vue-router"
import {useStore} from "vuex"

export function useRePwd() {
  const router = useRouter()
  const store = useStore()
  // 修改密码
  const formDrawerRef = ref(null)
  const form = reactive({
    oldpassword: "",
    password: "",
    repassword: ""
  })

  const rules = {
    oldpassword: [
      {
        required: true,
        message: '旧密码不能为空',
        trigger: 'blur'
      },
    ],
    password: [
      {
        required: true,
        message: '新密码不能为空',
        trigger: 'blur'
      },
    ],
    repassword: [
      {
        required: true,
        message: '确认密码不能为空',
        trigger: 'blur'
      },
    ]
  }

  const formRef = ref(null)
  const onSubmit = () => {
    formRef.value.validate((valid) => {
      if (!valid) {
        return false
      }
      formDrawerRef.value.showLoading()
      updatePwd(form)
          .then(res => {
            msgUtil("修改密码成功，请重新登录")
            store.dispatch("logout")
            // 跳转回登录页
            router.push("/login")
          })
          .finally(() => {
            formDrawerRef.value.hideLoading()
          })

    })
  }

  // 打开修改密码的表单
  const openRePasswordForm = () => formDrawerRef.value.open()

  return {
    formDrawerRef,
    form,
    rules,
    formRef,
    onSubmit,
    openRePasswordForm
  }
}

export function useLogout() {
  const router = useRouter()
  const store = useStore()

  function handleLogout() {
    showModal("是否要退出登录？").then(res => {
      logout().finally(() => {
        store.dispatch("logout")
        // 跳转回登录页
        router.push("/login")
        // 提示退出登录成功
        toast("退出登录成功")
      })
    })
  }

  return {
    handleLogout
  }
}
