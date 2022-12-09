const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') }
    ]
  },
  {
    path: '/list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: ':idlist', component: (idlist) => import('pages/ListPage.vue'), props: true },
      { path: 'create', component: () => import('pages/CreateListPage.vue') },
      { path: 'edit/:idlist', component: () => import('pages/EditListPage.vue'), props: true }
    ]
  },
  {
    path: '/task',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'create/:idlist', component: (idlist) => import('pages/CreateTaskPage.vue'), props: true }
    ]
  },
  {
    path: '/tuto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'v2', component: () => import('pages/TutoPage.vue') },
      {
        path: 'v3', component: () => import('pages/TutoPageVue3.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
