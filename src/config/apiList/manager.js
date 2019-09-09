import axios from 'utils/http/api'

export const getManagermessageInfo = params => {
  return axios({
    url: '/fund/getSeniorExecutive',
    params
  })
}

export default {
  getManagermessageInfo
}
