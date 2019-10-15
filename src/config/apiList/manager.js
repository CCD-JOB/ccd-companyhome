import axios from 'utils/http/api'

export const getManagermessageInfo = params => {
  return axios({
    url: '/fund/getSeniorExecutive',
    params
  })
}

export const getSeniorInfo = params => {
  return axios({
    url: '/infor/getSeniorInfo',
    params
  })
}

export default {
  getManagermessageInfo,
  getSeniorInfo
}
