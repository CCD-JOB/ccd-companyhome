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
      {
        path: '/companyinfo/business',
        name: 'business',
        component: resolve =>
          import('pages/companyinfo/business').then(module => resolve(module))
      },
      {
        path: '/companyinfo/privateman',
        name: 'privateman',
        component: resolve =>
          import('pages/companyinfo/privateman').then(module => resolve(module))
      },
      {
        path: '/companyinfo/risk',
        name: 'risk',
        component: resolve =>
          import('pages/companyinfo/risk').then(module => resolve(module))
      },
      {
        path: '/companyinfo/historical',
        name: 'historical',
        component: resolve =>
          import('pages/companyinfo/historical').then(module => resolve(module))
      },
      {
        path: '/companyinfo/investment',
        name: 'investment',
        component: resolve =>
          import('pages/companyinfo/investment').then(module => resolve(module))
      },
      {
        path: '/productinfo',
        name: 'productinfo',
        component: resolve =>
          import('pages/productinfo').then(module => resolve(module))
      },
      {
        path: '/productinfo/productatlas',
        name: 'productatlas',
        component: resolve =>
          import('pages/productinfo/productAtlas').then(module =>
            resolve(module)
          )
      },
      {
        path: '/productinfo/productanalyse',
        name: 'productAnalyse',
        component: resolve =>
          import('pages/productinfo/productAnalyse').then(module =>
            resolve(module)
          )
      },
      {
        path: '/product',
        name: 'product',
        component: resolve =>
          import('pages/product').then(module => resolve(module))
      },
      {
        path: '/manager',
        name: 'manager',
        component: resolve =>
          import('pages/manager').then(module => resolve(module))
      }
    ]
  }
]
