import axios from 'utils/http/api'

export const getManagermessage = params => {
  return axios({
    url: '/fund/getSeniorExecutive',
    params
  })
}

export default {
  getManagermessage

}
