import { ref } from 'vue'
import axios from 'axios'

/* 
使用axios发送异步ajax请求
*/
export default function doGet<T>(url: string, parameters?:any,formData?:any) {

  const result = ref<T | null>(null)
  const loading = ref(true)
  const errorMsg = ref(null)
  
  /**
   * axiosRequestConfig:
   * https://github.com/axios/axios#request-config
   * params: 表示与URL拼接在一起的入参
   * formData： 表示请求的from表单入参
   */
  axios.get(url,{
    headers:{"Accept-Encoding":"gzip, deflate, br",Connection:"keep-alive"},
    params:{parameters},
    data:{formData}
  })
    .then(response => {
      loading.value = false
      result.value = response.data
    })
    .catch(e => {
      loading.value = false
      errorMsg.value = e.message || '未知错误'
    })

  return {
    loading,
    result,
    errorMsg,
  }
}