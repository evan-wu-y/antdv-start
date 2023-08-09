import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/HomeView.vue'),
          meta: {
            title: 'Home',
            hidden: false,
            icon: 'HomeOutlined'
          }
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/views/AboutView.vue'),
          meta: {
            title: 'About',
            hidden: false,
            icon: 'info-circle-outlined'
          }
        },
        {
          path: '/test',
          name: 'Test',
          redirect: '/test1',
          meta: {
            title: 'Test',
            hidden: false,
            icon: 'info-circle-outlined'
          },
          children: [
            {
              path: '/test1',
              name: 'Test1',
              component: () => import('@/views/TestView1.vue'),
              meta: {
                title: 'Test1',
                hidden: false,
                icon: 'HomeOutlined'
              }
            },
            {
              path: '/test2',
              name: 'Test2',
              component: () => import('@/views/TestView2.vue'),
              meta: {
                title: 'Test2',
                hidden: false,
                icon: 'HomeOutlined'
              }
            },
          ]
        }
      ]
    },
  ]
})

export default router
