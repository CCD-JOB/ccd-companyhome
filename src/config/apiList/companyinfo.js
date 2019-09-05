import axios from 'utils/http/api'

export const getShowVenture = params => {
  return axios({
    url: '/infor/ventureSearch/showVenture',
    params
  })
}

export const getShowVentureCount = params => {
  return axios({
    url: '/infor/ventureSearch/showVentureCount',
    params
  })
}

// 默认全部倒出
export default {
  getShowVenture,
  getShowVentureCount
}
