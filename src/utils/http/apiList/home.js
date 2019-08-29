import axios from './../api'

export const getHonestyInfo = params => {
  return axios({
    url: '/infor/honestyInfo',
    params
  })
}

// 默认全部倒出
export default {
  getHonestyInfo
}
