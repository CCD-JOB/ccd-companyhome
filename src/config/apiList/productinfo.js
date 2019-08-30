import axios from 'utils/http/api'

export const getProductList = params => {
  return axios({
    url: '/infor/productList',
    params
  })
}

export const getAllIndustry = params => {
  return axios({
    url: '/infor/getAllIndustry',
    params
  })
}

// 默认全部倒出
export default {
  getProductList,
  getAllIndustry
}
