import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FlightDetail from '@/views/flightDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/dailyFlight/detail',
    name: 'flightDetail',
    component: FlightDetail
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
