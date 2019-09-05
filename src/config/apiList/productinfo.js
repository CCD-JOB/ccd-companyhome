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

export const getD3DataSource = params => {
  return axios({
    url: '/fund/neo4j/data/by_node',
    params
  })
}

// 默认全部倒出
export default {
  getProductList,
  getAllIndustry,
  getD3DataSource
}
