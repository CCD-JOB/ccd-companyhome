import axios from 'utils/http/api'

export const getHomeInfo = params => {
  return axios({
    url: '/infor/companyInfo',
    params
  })
}

export const getHonestyInfo = params => {
  return axios({
    url: '/infor/honestyInfo',
    params
  })
}

export const getOpinionInfo = params => {
  return axios({
    url: '/infor/getOpinionInfo',
    params
  })
}

// 默认全部倒出
export default {
  getHomeInfo,
  getHonestyInfo,
  getOpinionInfo
}
