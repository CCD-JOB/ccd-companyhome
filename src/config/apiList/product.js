import axios from 'utils/http/api'

export const getProductBasicInfo = params => {
  return axios({
    url: '/infor/getProductDetail',
    params
  })
}

// 默认全部倒出
export default {
  getProductBasicInfo
}
