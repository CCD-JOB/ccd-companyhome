import { BasicLayout } from '@/layouts'

export default [
  {
    path: '/',
    redirect: '/home',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: resolve =>
          import('pages/home').then(module => resolve(module))
      },
      // 公司信息 - 工商信息
      {
        path: '/companyinfo/business',
        name: 'business',
        component: resolve =>
          import('pages/companyinfo/business').then(module => resolve(module))
      },
      // 公司信息 - 私募管理人
      {
        path: '/companyinfo/privateman',
        name: 'privateman',
        component: resolve =>
          import('pages/companyinfo/privateman').then(module => resolve(module))
      },
      // 公司信息 - 风险信息
      {
        path: '/companyinfo/risk',
        name: 'risk',
        component: resolve =>
          import('pages/companyinfo/risk').then(module => resolve(module))
      },
      // 公司信息 - 历史变更
      {
        path: '/companyinfo/historical',
        name: 'historical',
        component: resolve =>
          import('pages/companyinfo/historical').then(module => resolve(module))
      },
      // 公司信息 - 对外投资

      {
        path: '/companyinfo/investment',
        name: 'investment',
        component: resolve =>
          import('pages/companyinfo/investment').then(module => resolve(module))
      },
      // 产品信息
      {
        path: '/productinfo',
        name: 'productinfo',
        component: resolve =>
          import('pages/productinfo').then(module => resolve(module))
      },
      // 产品图谱
      {
        path: '/productinfo/productatlas',
        name: 'productatlas',
        component: resolve =>
          import('pages/productinfo/productAtlas').then(module =>
            resolve(module)
          )
      },
      // 产品分析
      {
        path: '/productinfo/productanalyse',
        name: 'productAnalyse',
        component: resolve =>
          import('pages/productinfo/productAnalyse').then(module =>
            resolve(module)
          )
      },
      // 产品主页
      {
        path: '/product',
        name: 'product',
        component: resolve =>
          import('pages/product').then(module => resolve(module))
      },
      // 信托计划
      {
        path: '/intrustplan',
        name: 'intrustplan',
        component: resolve =>
          import('pages/product/intrustplan').then(module => resolve(module))
      },
      {
        path: '/fillinginfo',
        name: 'fillinginfo',
        component: resolve =>
          import('pages/product/fillingInfo').then(module => resolve(module))
      },
      // 管理主页
      {
        path: '/manager',
        name: 'manager',
        component: resolve =>
          import('pages/manager').then(module => resolve(module))
      }
    ]
  }
]
