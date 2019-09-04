import axios from 'utils/http/api'

export const getShowVenture = params => {
  return axios({
    url: '/infor/ventureSearch/showVenture',
    params
  })
}

// 默认全部倒出
export default {
  getShowVenture
}
